export const generateHeadingId = (text: string): string => {
  console.log(text.toLowerCase().replace(/[^\w\s]/g, ""));
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, "") // удаляем все символы кроме букв, цифр и пробелов
    .replace(/\s/g, "-"); // заменяем пробелы на дефис
};
