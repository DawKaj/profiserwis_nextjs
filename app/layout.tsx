import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Roboto, Roboto_Mono, Rubik, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import Cookies from "@/components/cookies";
import AsidePanel from "@/components/aside";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: "400",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
});

const rubik = Rubik({
  variable: "--font-rubik",
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
      <body className="flex flex-col bg-g-100 dark:bg-g-200 text-g-400">
        <ThemeProvider attribute="class" defaultTheme="system">
          <Cookies />
          <div className="flex flex-row h-full">
            <main className="max-w-225 md:ml-75 h-full flex flex-col p-16 md:pt-32 justify-center md:text-left">
              <AsidePanel />
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
