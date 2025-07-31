"use client";

import React, { useState } from "react";
import Image from "next/image";

// Screenshot data - replace with your actual screenshots
const screenshots = [
  {
    id: 1,
    title: "Main Launcher Interface",
    description:
      "Clean and intuitive launcher design optimized for performance",
    image: "/showcase/main-interface.webp",
    category: "Interface",
  },
  {
    id: 2,
    title: "Settings Panel",
    description:
      "Comprehensive settings for FPS optimization and customization",
    image: "/showcase/settings.webp",
    category: "Features",
  },
  {
    id: 3,
    title: "In-Game FPS Demo",
    description: "In-Game FPS monitoring Gameplay",
    image: "/showcase/gameplay.webp",
    category: "Performance",
  },
  {
    id: 4,
    title: "Mod Manager",
    description: "Easy mod installation and management system",
    image: "/showcase/mods.webp",
    category: "Features",
  },
  {
    id: 5,
    title: "Profile Selection",
    description: "Multiple game profiles for different optimization levels",
    image: "/showcase/profile.webp",
    category: "Interface",
  },
  {
    id: 6,
    title: "Server Management",
    description: "Check Out, Create, Manage Server At One Place!",
    image: "/showcase/MainServer.png",
    category: "Features",
  },
  {
    id: 7,
    title: "Resource Pack Manager",
    description: "Seamless resource pack integration and preview",
    image: "/showcase/resource-store.webp",
    category: "Features",
  },
  {
    id: 8,
    title: "Self-Hosted Servers!",
    description: "Seamless Self-Hosted Servers integration and preview",
    image: "/showcase/SelfHost-Server.png",
    category: "Features",
  },
  {
    id: 9,
    title: "Self-Hosted Files Management Ui Preview",
    description: "Edit, Delete, Create .",
    image: "/showcase/SelfHost-Server-Files.png",
    category: "Interface",
  },
  {
    id: 10,
    title: "File Editing Ui",
    description: "Sample Of File Editing",
    image: "/showcase/SelfHost-Server-Files-editing.png",
    category: "Interface",
  },
];

const categories = ["All", "Interface", "Features", "Performance"];

const Modal = ({ screenshot, onClose }) => {
  if (!screenshot) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div
        className="relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-700 flex flex-col"
        style={{ width: '80vw', height: '80vh', maxWidth: '1280px', maxHeight: '90vh' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-zinc-800/80 hover:bg-zinc-700 rounded-full flex items-center justify-center transition-colors"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Image */}
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={screenshot.image}
            alt={screenshot.title}
            width={1200}
            height={1200}
            className="w-auto max-w-full max-h-[80vh] object-contain"
            quality={100}
          />
        </div>

        {/* Info */}
        <div className="p-6 overflow-y-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm font-mono border border-green-600/30">
              {screenshot.category}
            </span>
          </div>
          <h3 className="text-2xl font-bold font-space-mono mb-2">
            {screenshot.title}
          </h3>
          <p className="text-zinc-300">{screenshot.description}</p>
        </div>
      </div>
    </div>
  );
};


export default function ShowcasePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedScreenshot, setSelectedScreenshot] = useState(null);

  const filteredScreenshots =
    selectedCategory === "All"
      ? screenshots
      : screenshots.filter(
          (screenshot) => screenshot.category === selectedCategory
        );

  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#232323] via-[#281a13] to-[#393939] -z-10">
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Crect x='0' y='0' width='20' height='20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      <main className="min-h-screen text-white relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm font-mono border border-green-600/30 mb-6">
                🖼️ Screenshots Gallery
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 font-zen-dots bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Showcase
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-4xl mx-auto font-space-mono">
              Take a look at Mendora Client's sleek interface, powerful
              features, and performance optimizations in action.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="pb-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-mono uppercase tracking-wide transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-green-600 text-white shadow-lg shadow-green-600/25"
                      : "bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700/50 border border-zinc-700/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots Grid */}
        <section className="pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredScreenshots.map((screenshot, index) => (
                <div
                  key={screenshot.id}
                  className="group cursor-pointer"
                  onClick={() => setSelectedScreenshot(screenshot)}
                >
                  <div className="bg-zinc-800/50 rounded-xl overflow-hidden border border-zinc-700/50 backdrop-blur-sm transition-all duration-500 hover:bg-zinc-700/50 hover:border-green-600/30 hover:shadow-2xl hover:shadow-green-600/10 hover:scale-105">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <Image
                        src={screenshot.image}
                        alt={screenshot.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        quality={90}
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-green-600/80 text-white px-3 py-1 rounded-full text-xs font-mono border border-green-600 backdrop-blur-sm">
                          {screenshot.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold font-space-mono mb-2 group-hover:text-green-400 transition-colors">
                        {screenshot.title}
                      </h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {screenshot.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-3xl p-12 border border-green-600/30 backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-6 font-zen-dots">
                Ready to Experience It Yourself?
              </h2>
              <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
                Download Mendora Client now and see the difference optimized
                performance can make.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/download"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 rounded-xl font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-600/25"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Now
                </a>

                <a
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-700 hover:bg-zinc-600 rounded-lg font-mono uppercase tracking-wide transition-all duration-300 hover:scale-105 border border-zinc-600"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal */}
      <Modal
        screenshot={selectedScreenshot}
        onClose={() => setSelectedScreenshot(null)}
      />
    </>
  );
}
