"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#232323] via-[#281a13] to-[#393939] text-white flex items-center justify-center relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Crect x='0' y='0' width='20' height='20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-green-600/40 rounded-[2px] animate-[mcfloat1_6s_ease-in-out_infinite]" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-amber-400/60 rounded-[2px] animate-[mcfloat2_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-blue-600/50 rounded-[2px] animate-[mcfloat3_7s_ease-in-out_infinite]" />
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-purple-500/60 rounded-[2px] animate-[mcfloat1_5s_ease-in-out_infinite]" />
      </div>

      <div className="text-center px-6 relative z-10 max-w-2xl mx-auto">
        {/* Error Code */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold font-zen-dots bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent leading-none mb-4 drop-shadow-lg">
            404
          </h1>
          <div className="flex justify-center">
            <span className="bg-red-600/20 text-red-300 px-4 py-2 rounded-lg font-mono text-sm border border-red-600/30 uppercase tracking-wider">
              Page Not Found
            </span>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-space-mono">
            Oops! This page got lost in the void
          </h2>
         <p className="text-zinc-300 text-lg leading-relaxed">
         The page you&apos;re looking for doesn&apos;t exist or has been moved. 
         Don&apos;t worry, even the best explorers get lost sometimes!
        </p>
        </div>

        {/* Minecraft-style message */}
        <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/50 backdrop-blur-sm mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-8 bg-red-600 rounded-[4px] flex items-center justify-center">
              <span className="text-white text-sm font-bold">!</span>
            </div>
            <span className="font-mono text-red-400 uppercase tracking-wide">Connection Lost</span>
          </div>
          <p className="text-zinc-400 font-mono text-sm">
            Unable to connect to requested resource. Please check your navigation or return to spawn point.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-mono uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-600/25"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go Home
          </Link>
          
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-700 hover:bg-zinc-600 rounded-lg font-mono uppercase tracking-wide transition-all duration-300 hover:scale-105 border border-zinc-600"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-zinc-700/50">
          <p className="text-zinc-400 mb-4 font-mono text-sm uppercase tracking-wide">
            Quick Navigation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="text-green-400 hover:text-green-300 font-mono text-sm hover:underline transition">
              About
            </Link>
            <Link href="/faq" className="text-green-400 hover:text-green-300 font-mono text-sm hover:underline transition">
              FAQ
            </Link>
            <Link href="/download" className="text-green-400 hover:text-green-300 font-mono text-sm hover:underline transition">
              Download
            </Link>
            <a href="https://discord.gg/your-discord-invite" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-mono text-sm hover:underline transition">
              Discord
            </a>
          </div>
        </div>
      </div>

      {/* Custom keyframes for floating animations */}
      <style jsx global>{`
        @keyframes mcfloat1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(90deg); }
          50% { transform: translateY(0px) rotate(180deg); }
          75% { transform: translateY(-10px) rotate(270deg); }
        }
        @keyframes mcfloat2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(120deg); }
          66% { transform: translateY(-25px) rotate(240deg); }
        }
        @keyframes mcfloat3 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-18px) scale(1.1); }
        }
      `}</style>
    </div>
  );
}
