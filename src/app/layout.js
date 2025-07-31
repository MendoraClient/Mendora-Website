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
  metadataBase: new URL("https://mendora-client.github.io"),
  title: "Mendora Client – Optimized Minecraft Launcher for Low-End PCs",
  description:
    "Mendora Client is a lightweight, Electron.js-based Minecraft launcher designed for low-end computers. Features cracked account support, FPS boost mods, a custom performance resource pack, and more. Enjoy smooth Minecraft gameplay even on modest hardware!",
  keywords: [
    "Mendora Client",
    "Minecraft Launcher",
    "Low End PC",
    "FPS Boost",
    "Cracked Minecraft",
    "OptiFine",
    "Sodium",
    "Java Launcher",
    "Minecraft Mods",
    "Performance",
    "Gaming",
    "Resource Pack",
    "Electron Launcher",
    "Windows",
    "macOS",
    "Linux",
  ],

  openGraph: {
    title: "Mendora Client – Optimized Minecraft Launcher for Low-End PCs",
    description:
      "The best way to play Minecraft on low-end hardware! Fast, modern, cracked support, FPS-boosting mods, and resource packs built in.",
    url: "https://mendora-client.github.io",
    siteName: "Mendora Client",
    images: [
      {
        url: "/mendora.png",
        width: 1200,
        height: 630,
        alt: "Mendora Client Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mendora Client – Minecraft Launcher for Low-End Devices",
    description:
      "Launch Minecraft fast, even on old PCs. Supports cracked accounts and comes packed with FPS mods and a custom resource pack.",
    images: ["/mendora.png"],
  },

  alternates: {
    canonical: "https://mendora-client.github.io",
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
    <html lang="en" className="dark">
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
