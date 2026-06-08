import localFont from "next/font/local";

export const manrope = localFont({
  src: [
    {
      path: "./manrope/static/Manrope-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./manrope/static/Manrope-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./manrope/static/Manrope-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
});

export const playfair = localFont({
  src: [
    {
      path: "./playfair/static/PlayfairDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./playfair/static/PlayfairDisplay-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./playfair/static/PlayfairDisplay-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-playfair",
});
