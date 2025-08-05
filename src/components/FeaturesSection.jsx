import React from "react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Lightweight & Fast",
      description:
        "Optimized for low-end PCs to give you smooth Minecraft gameplay without lag or delays.",
      icon: (
        <svg
          className="w-8 h-8 text-green-400 mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Built-In FPS Boost",
      description:
        "Enhance your frame rates with mods and tweaks designed to give you a competitive edge.",
      icon: (
        <svg
          className="w-8 h-8 text-green-400 mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      title: "Cracked Account Support",
      description:
        "Easy access for players without premium accounts, so everyone can join the fun quickly.",
      icon: (
        <svg
          className="w-8 h-8 text-green-400 mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7a4 4 0 01-8 0M12 14v7m-7-7h14"
          />
        </svg>
      ),
    },
    {
      title: "Built-in Self Server Hosting",
      description:
        "Enjoy With Your Friends without sacrificing performance, Hosted In Mendora Client.",
      icon: (
        <svg
          className="w-8 h-8 text-green-400 mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m9-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-zinc-900 py-16 text-white my-8">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center font-zen-dots text-blue-400 uppercase tracking-wide">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto font-space-mono">
          {features.map(({ title, description, icon }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center p-6 bg-zinc-800 rounded-lg shadow-lg hover:shadow-green-600/50 transition-shadow"
            >
              {icon}
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm leading-relaxed font-geo">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
