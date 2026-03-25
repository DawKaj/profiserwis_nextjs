import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Roboto, Roboto_Mono, Rubik, JetBrains_Mono } from "next/font/google";
import Footer from "@/components/Footer";

import "./globals.css";
import Cookies from "@/components/cookies";
import AsidePanel from "@/components/aside";
import BottomBar from "@/components/bottombar";

const roboto = Roboto({
  weight: "400",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
});

const rubik = Rubik({
  variable: "--font-rubik",
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
        className="flex flex-col max-w-300 bg-bgColorLight dark:bg-bgColorDark"
        style={{ height: "100vh", margin: "auto" }}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <Cookies />
          <div className="flex flex-row h-full" style={{ height: "100%" }}>
            <AsidePanel />
            <main
              className="max-w-245 flex flex-col mx-auto justify-center md:text-left  border border-solid border-borderColorLight"
              style={{ height: "100%" }}
            >
              <div className=" md:p-16" style={{ padding: "4rem" }}>
                {children}
              </div>
            </main>
          </div>
          <BottomBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
