import { useMemo, useCallback } from "react";

import { useTextToSpeech } from "@/hooks/use-text-to-speech";

import { share } from "@/utils/share";

import type { AsideActionsProps } from "./aside-actions";

export const useAsideActions = (props: AsideActionsProps) => {
  const {
    audioRef,
    isPlaying,
    isLoading,
    onToggle,
    progress,
    progressSeconds,
    estimatedTime,
  } = useTextToSpeech({ articleContent: props.listenText });

  const listenTitle = useMemo(() => {
    if (isLoading) {
      return "Loading...";
    }

    if (progress) {
      return `Listen - ${isPlaying ? formatTime(progressSeconds) : "Сontinue"}`;
    }

    return `Listen - ${estimatedTime}`;
  }, [progress, progressSeconds, estimatedTime, isLoading, isPlaying]);

  const onShare = useCallback(
    (value: Option) => {
      if (value.value === "facebook") {
        share.facebook(window.location.href);
      } else if (value.value === "linkedin") {
        share.linkedin(window.location.href);
      } else if (value.value === "twitter") {
        share.twitter(window.location.href, props.name);
      }
    },
    [props.name],
  );

  return { listenTitle, isLoading, audioRef, onToggle, onShare };
};

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};
