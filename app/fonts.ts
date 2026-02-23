import localFont from "next/font/local";

export const HellixVFTRIA = localFont({
  src: "./fonts/SeasonMixTRIAL-Light.otf",
  variable: "--font-season-mix",
  display: "swap",
});

export const VanillaSans = localFont({
  src: [
    {
      path: "./fonts/VanillaSansTRIAL-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/VanillaSansTRIAL-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/VanillaSansTRIAL-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-vanilla-sans",
  display: "swap",
});

export const SFProText = localFont({
  src: [
    {
      path: "./fonts/SF-Pro-Text-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sf-pro",
});
