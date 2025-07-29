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

const limelight = Limelight({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-limelight",
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

export const metadata = {
  title: "Mendora Client",
  description: "Your Best Launcher To FPS Lovers ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`
        ${audiowide.variable} 
        ${geo.variable} 
        ${kanit.variable} 
        ${limelight.variable} 
        ${spaceGrotesk.variable} 
        ${spaceMono.variable} 
        ${syneMono.variable} 
        ${zenDots.variable}
      `}
      >
        {children}
      </body>
    </html>
  );
}
