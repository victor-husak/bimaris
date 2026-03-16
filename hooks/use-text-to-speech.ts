import { useState, useRef, useMemo, useEffect, useCallback } from "react";
import removeMarkdown from "remove-markdown";

export type UseTextToSpeechProps = {
  articleContent: string;
  language?: "en" | "ru";
};

export const useTextToSpeech = ({
  articleContent,
  language = "en",
}: UseTextToSpeechProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const chunkUrlsRef = useRef<string[]>([]);
  const preloadedChunksRef = useRef<Map<number, string>>(new Map());

  // Очищаем markdown
  const cleanText = useMemo(
    () => removeMarkdown(articleContent),
    [articleContent],
  );

  // Разбиваем на абзацы
  const chunks = useMemo(
    () =>
      cleanText
        .split(/\n\n+/)
        .map((p) => p.trim())
        .filter(Boolean),
    [cleanText],
  );

  const totalDuration = useMemo(() => {
    return chunks.reduce(
      (sum, c) => sum + estimateTextDuration(c, language),
      0,
    );
  }, [chunks, language]);

  // Очистка ресурсов
  const stopAndAbort = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
    }
    chunkUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));
    chunkUrlsRef.current = [];
    preloadedChunksRef.current.forEach((url) => URL.revokeObjectURL(url));
    preloadedChunksRef.current.clear();

    setIsPlaying(false);
    setIsLoading(false);
    setCurrentTime(0);
    setCurrentIndex(0);
  }, []);

  // Получение TTS для чанка
  const fetchChunk = useCallback(
    async (index: number): Promise<string | null> => {
      if (preloadedChunksRef.current.has(index))
        return preloadedChunksRef.current.get(index)!;

      const controller = new AbortController();

      try {
        const response = await fetch("/api/tts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: chunks[index] }),
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Network error");

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        chunkUrlsRef.current.push(url);
        return url;
      } catch (err: any) {
        if (err.name === "AbortError") console.log("Загрузка отменена");
        else console.error("TTS ошибка:", err);
        return null;
      }
    },
    [chunks],
  );

  // Предзагрузка следующего чанка
  const preloadNextChunk = useCallback(
    (nextIndex: number) => {
      if (
        nextIndex >= chunks.length ||
        preloadedChunksRef.current.has(nextIndex)
      )
        return;
      fetchChunk(nextIndex).then((url) => {
        if (url) preloadedChunksRef.current.set(nextIndex, url);
      });
    },
    [chunks.length, fetchChunk],
  );

  // Воспроизведение чанка
  const playChunk = useCallback(
    async (index: number) => {
      if (index >= chunks.length) {
        stopAndAbort();
        return;
      }

      setIsLoading(true);
      setCurrentIndex(index);

      let url: string | null | undefined =
        preloadedChunksRef.current.get(index);
      if (!url) {
        url = await fetchChunk(index);
        if (!url) {
          setIsLoading(false);
          return;
        }
        preloadedChunksRef.current.set(index, url);
      }

      if (!audioRef.current) return;

      audioRef.current.src = url;
      audioRef.current.play().catch((err) => {
        if (err.name === "AbortError")
          console.log("Play прерван паузой, продолжаем...");
        else console.error("Ошибка воспроизведения:", err);
      });

      setIsPlaying(true);
      setIsLoading(false);

      // Предзагрузка следующего чанка
      preloadNextChunk(index + 1);
    },
    [chunks.length, fetchChunk, preloadNextChunk, stopAndAbort],
  );

  const onToggle = useCallback(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (audioRef.current.src) audioRef.current.play();
      else playChunk(currentIndex);
      setIsPlaying(true);
    }
  }, [isPlaying, currentIndex, playChunk]);

  const onAudioEnded = useCallback(() => {
    playChunk(currentIndex + 1);
  }, [currentIndex, playChunk]);

  // Обработчик события ended
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime || 0);
    };

    const handleEnded = () => {
      onAudioEnded();
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [onAudioEnded]);

  // Прогресс 0–1
  const progress = useMemo(() => {
    if (!totalDuration) return 0;
    const pastChunksDuration = chunks
      .slice(0, currentIndex)
      .reduce((sum, c) => sum + estimateTextDuration(c, language), 0);
    return Math.min(1, (pastChunksDuration + currentTime) / totalDuration);
  }, [currentTime, currentIndex, totalDuration, chunks, language]);

  const progressSeconds = useMemo(() => {
    const pastChunksDuration = chunks
      .slice(0, currentIndex)
      .reduce((sum, c) => sum + estimateTextDuration(c, language), 0);
    return Math.min(totalDuration, pastChunksDuration + currentTime);
  }, [currentTime, currentIndex, totalDuration, chunks, language]);

  const estimatedTime = useMemo(() => {
    return `${Math.floor(totalDuration / 60)}:${(totalDuration % 60)
      .toString()
      .padStart(2, "0")}`;
  }, [totalDuration]);

  return {
    audioRef,
    isPlaying,
    isLoading,
    onToggle,
    stopAndAbort,
    chunks,
    progress,
    progressSeconds,
    currentTime,
    totalDuration,
    estimatedTime,
  };
};

// Оценка длительности
export function estimateTextDuration(
  text: string,
  language: "en" | "ru" = "ru",
): number {
  if (!text.trim()) return 0;

  if (language === "en") {
    const words = text.trim().split(/\s+/).length;
    const secondsByWords = words / 2.5;
    const punctuationMatches = text.match(/[.!?]/g) || [];
    const commaMatches = text.match(/[,;:]/g) || [];
    const pauses = punctuationMatches.length * 0.7 + commaMatches.length * 0.3;
    return Math.max(1, Math.round(secondsByWords + pauses));
  } else {
    return Math.max(1, Math.round(text.length / 15));
  }
}
