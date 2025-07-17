import localFont from "next/font/local";

export const geometria = localFont({
  src: [
    {
      path: "./fonts/geometria/Geometria-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/geometria/Geometria-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/geometria/Geometria-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/geometria/Geometria.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-geometria",
  display: "swap",
});
