import {
  Audiowide,
  Geo,
  Kanit,
  Limelight,
  Space_Grotesk,
  Space_Mono,
  Syne_Mono,
  Zen_Dots,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Head from "next/head";

/**
 *  Fonts Setup
 */

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-audiowide",
});

const geo = Geo({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-geo",
});

const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-kanit",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

const syneMono = Syne_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-syne-mono",
});

const zenDots = Zen_Dots({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-zen-dots",
});

/**
 * Metadata And SEO Settings
 */
export const metadata = {
  title: "Mendora Client – Lightweight Minecraft Launcher",
  description:
    "Mendora Client is a fast, lightweight Minecraft launcher with cracked support and FPS mods, optimized for smooth gameplay on low-end PCs.",
  keywords: [
    "Mendora Client",
    "Mendora Launcher",
    "Minecraft Cracked",
    "Best Luancher 2025",
    "Best Luancher 2026",
    "Minecraft Launcher",
    "Lightweight Launcher",
    "Low-End PC",
    "FPS Boost",
    "Cracked Minecraft",
    "Electron Launcher",
    "Performance Mods",
    "Resource Pack",
    "Gaming",
  ],
  openGraph: {
    title: "Mendora Client – Lightweight Minecraft Launcher",
    description:
      "Experience smooth Minecraft gameplay on any PC with Mendora Client. Fast, modern launcher with cracked support and FPS-boosting mods built-in.",
    url: "https://mendora.qzz.io",
    siteName: "Mendora Client",
    images: [
      {
        url: "https://mendora.qzz.io/mendora.png",
        width: 1200,
        height: 630,
        alt: "Mendora Client Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mendora Client – Lightweight Minecraft Launcher",
    description:
      "Launch Minecraft fast on low-end PCs. Supports cracked accounts, FPS mods, and includes a custom resource pack.",
    images: ["https://mendora.qzz.io/mendora.png"],
  },
  alternates: {
    canonical: "https://mendora.qzz.io",
  },
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicon.ico",
      sizes: "180x180",
    },
  ],
  creator: "Mendora Team",
  applicationName: "Mendora Client",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <Head>
        <meta
          name="google-site-verification"
          content="Pt-FXLAyvYQ2aLXhZ-EgqEK88Ny6MNESNUCMs8EBroE"
        />
      </Head>
      <body
        className={`
        ${audiowide.variable} 
        ${geo.variable} 
        ${kanit.variable} 
        ${spaceGrotesk.variable} 
        ${spaceMono.variable} 
        ${syneMono.variable} 
        ${zenDots.variable}
      `}
      >
        {/*
        Is This Place I Used Code,
        Is This Place I Coded Here,
        And Fucked up Writed Down This.......
        


        I AGREEE I COMMITED THIS BEFORE 
        Lol i know i am just Making Size Of This File Bigger


        I love You My Son

        LUNAR HOSTING NEVER DIES


        */}
        <Navbar className=" mb-4" />
        <main className="mt-8">{children}</main>
      </body>
    </html>
  );
}
