"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-transparent text-white overflow-hidden">
      {/* Now no inline block grid background here */}

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 py-12 sm:py-32">
        {/* Description (Left) */}
        <div className="flex-1 flex flex-col items-start justify-center">
          {/* Minecraft badge */}
          <div className="mb-6 flex gap-2 items-center">
            <span
              className="bg-green-600/80 text-white text-xs px-2 py-1 rounded font-mono border border-green-900 shadow shadow-green-800/30 tracking-wide"
              style={{ letterSpacing: "0.03em" }}
            >
              Optimized for Low-End PCs
            </span>
            <span
              className="bg-zinc-700/60 text-green-300 text-xs px-2 py-1 rounded font-mono border border-zinc-800 tracking-wide"
              style={{ letterSpacing: "0.03em" }}
            >
              Minecraft 1.21 Ready!
            </span>
          </div>
          {/* Main headline */}
          <Card className="bg-transparent border-0 shadow-none">
            <CardContent className="p-0">
              <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-2 font-space-mono uppercase tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.14)]">
                Are You FPS Lover?
                <br />
                Introducing...
                <br />
                <span className="font-zen-dots text-green-400 drop-shadow-[0_2px_4px_rgba(30,200,80,0.12)]">
                  Mendora Client
                </span>
              </h1>
            </CardContent>
          </Card>
          {/* Optional Download buttons */}
          <div className="mt-5 flex gap-4">
            <button className="px-2.5 py-1 bg-zinc-900/80 border border-zinc-800 font-mono text-xs rounded hover:bg-green-900/80 hover:text-green-200 transition">
              <Link href="/download">Download for Windows</Link>
            </button>
            {/* discord.gg/EnycKnQ98h */}
            <button className="px-2.5 py-1 bg-zinc-900/80 border border-zinc-800 font-mono text-xs rounded hover:bg-blue-400/80 hover:text-green-200 transition">
              <Link href="https://discord.gg/FMQn55V2bK">Discord Support</Link>
            </button>
          </div>
        </div>
        {/* Image/blob (Right) */}
        <div className="flex-1 flex justify-center items-center relative">
          {/* Floating pixel "particles" */}
          <span className="absolute left-8 top-6 w-6 h-6 bg-green-600/40 rounded-[4px] shadow-lg animate-[mcfloat1_5s_ease-in-out_infinite]" />
          <span className="absolute right-10 bottom-12 w-3 h-3 bg-amber-400/80 rounded-[3px] shadow-md animate-[mcfloat2_6.5s_ease-in-out_infinite]" />
          <span className="absolute left-28 bottom-20 w-4 h-4 bg-sky-600/60 rounded-[4px] shadow-lg animate-[mcfloat3_7s_ease-in-out_infinite]" />
          <Card className="bg-zinc-900/90 border-none shadow-xl rounded-full flex items-center justify-center w-72 h-72 md:w-96 md:h-96 ring-2 ring-green-700/30 relative overflow-visible">
            <Image
              src="/mendora.png"
              alt="Mendora Client"
              width={320}
              height={320}
              quality={100}
              className="rounded-full object-cover w-56 h-56 md:w-80 md:h-80 drop-shadow-[0_8px_32px_rgba(20,255,20,0.06)]"
              priority
            />
          </Card>
        </div>
      </div>
    </section>
  );
}
