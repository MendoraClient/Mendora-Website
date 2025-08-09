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
       <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
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
         <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
        <text
  x="12"
  y="10"
  fill="currentColor"
  fontSize="6"
  fontFamily="Arial, sans-serif"
  fontWeight="normal"
  textAnchor="middle"
  dominantBaseline="middle"
  style={{ letterSpacing: "0.5px" }}
>
  7 2 6
</text>

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
       <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
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
          <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-transparent py-16 text-white my-8">
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
