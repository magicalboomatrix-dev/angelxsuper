import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import LayoutClient from "./LayoutClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ---------- METADATA ---------- */
export const metadata = {
  title: "AngelX Super",
  description:
    "AngelX is the most trustable exchange partner. Exchange more, earn more!",
  manifest: "/manifest.json",
};

/* ---------- VIEWPORT (NO ZOOM) ---------- */
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/x-icon" href="/image/logo-icon.png" />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Monda:wght@400..700&display=swap"
          rel="stylesheet"
        />

        {/* Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />

            <link rel="stylesheet" href="/css/style.css" type="text/css" />

        {/* ======================
            EMBEDDED CSS TO STOP MOBILE ZOOM
            ====================== */}
        <style>{`
          * {
            box-sizing: border-box;
            -webkit-text-size-adjust: 100%;
            text-size-adjust: 100%;
          }

          html, body {
            width: 100%;
            max-width: 100%;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
            touch-action: manipulation;
            font-family: "Roboto", sans-serif;
          }

          /* Prevent iOS auto-zoom on inputs */
          input, textarea, select, button {
            font-size: 16px !important;
          }

          /* Responsive container */
          .container {
            width: 100%;
            max-width: 1200px;
            margin: auto;
            padding: 0 15px;
          }

          /* Common fixes */
          .main-wrapper {
            width: 100%;
            min-height: 100vh;
            overflow-x: hidden;
          }

          img {
            max-width: 100%;
            height: auto;
            display: block;
          }
        `}</style>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LayoutClient>{children}</LayoutClient>

        {/* External Scripts */}
        <Script
          src="https://code.jquery.com/jquery-3.6.0.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.12/jquery.bxslider.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
