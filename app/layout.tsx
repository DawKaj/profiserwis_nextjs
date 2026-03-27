import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Roboto, Roboto_Mono, Rubik, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import Cookies from "@/components/cookies";
import AsidePanel from "@/components/aside";
import BottomBar from "@/components/bottombar";

const roboto = Roboto({
  weight: "400",
});

const robotoMono = Roboto_Mono({});

const rubik = Rubik({
  weight: "400",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Witamy - Profi Serwis Automatyka kompleksowo",
  authors: [{ name: "Profi Serwis", url: "https://www.profiserwis.com.pl" }],
  description: "Automatyka i Robotyka Przemysłowa Kompleksowo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      suppressHydrationWarning
      className="{roboto.className} {robotoMono.className} {rubik.className} {jetbrainsMono.className}"
    >
      <body
        className="flex flex-col max-w-300 bg-g-100 dark:bg-g-200 text-g-400"
        style={{ height: "100vh", margin: "auto" }}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <Cookies />
          <div className="flex flex-row h-full">
            <AsidePanel />
            <main
              className="max-w-225 h-full flex flex-col  mx-auto justify-center md:text-left"
              style={{ padding: "4rem" }}
            >
              {children}
            </main>
          </div>
          <BottomBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
