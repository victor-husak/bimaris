export const share = {
  facebook: (url: string) =>
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank",
      "noopener,noreferrer",
    ),

  linkedin: (url: string) =>
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      "_blank",
      "noopener,noreferrer",
    ),

  twitter: (url: string, text: string) =>
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url,
      )}&text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    ),
};
