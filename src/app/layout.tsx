import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "LotusRPA",
  icons: {
    icon: "/favicon.png",
  },
};

const geometria = localFont({
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) return;
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],
              k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=103538616", "ym");

            ym(103538616, "init", {
              ssr: true,
              webvisor: true,
              clickmap: true,
              ecommerce: "dataLayer",
              accurateTrackBounce: true,
              trackLinks: true
            });
          `}
        </Script>
      </head>
      <body className={geometria.variable}>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/103538616"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        {children}
      </body>
    </html>
  );
}
