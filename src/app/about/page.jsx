"use client";

import Image from "next/image";

const teamMembers = [
  {
    name: "ma4z",
    role: "Creator & Lead Developer",
    photo: "/team/MA4Z.webp",
    discord: "ma5z_",
  },
  {
    name: "ItzTha",
    role: "Mendora Admin",
    photo: "/team/MyBestie.webp", 
    discord: "tha_yt",
  },
  {
    name: "Vspcoderz",
    role: "Mendora Developer",
    photo: "/team/vspcoderz.jpg", 
    discord: "vspcoderz",
  },
  {
    name: "Crater",
    role: "Lead Developer",
    photo: "/team/crater.webp",
    discord: "craterxo",
  },
  {
    name: "Nehxurai",
    role: "Mendora Moderator",
    photo: "/team/xerin.webp",
    discord: "nehxurai",
  },
  {
    name: "gwidoniusz99",
    role: "Mendora Admin",
    photo: "/team/idk.webp",
    discord: "gwidoniusz99",
  },
];

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen mt-4 text-white px-6 py-16 max-w-7xl mx-auto font-space-mono">
        {/* Our Story */}
        <section className="mb-20 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 font-zen-dots">Our Story</h1>
          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed">
            Mendora Client was born from the passion to bring smooth and
            optimized Minecraft gaming experiences to everyone, especially those
            with low-end PCs. Our mission is to empower gamers by delivering
            stellar FPS boosts, user-friendly design, and reliable performance.
          </p>
        </section>

        {/* Our Team */}
        <section className="mb-20">
          <h2 className="text-4xl font-semibold mb-10 text-center tracking-wider">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map(({ name, role, photo, discord }, i) => (
              <div
                key={i}
                className="bg-zinc-800 rounded-lg shadow-lg p-6 flex flex-col items-center"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-md mb-4">
                  <Image
                    src={photo}
                    alt={`${name} photo`}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{name}</h3>
                <p className="italic text-zinc-400 mb-3">{role}</p>
                <a
                  href={`https://discordapp.com/users/${discord.replace(
                    "#",
                    "/"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 font-mono text-sm"
                >
                  Discord: {discord}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Discord Support */}
        <section className="text-center">
          <h2 className="text-4xl font-semibold mb-6">Need Help?</h2>
          <p className="mb-8 text-zinc-300 max-w-lg mx-auto">
            Join our Discord community for fast support, updates, and to connect
            with other Mendora Client users.
          </p>
          <a
            href="https://discord.gg/FMQn55V2bK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold uppercase tracking-wide transition-colors"
          >
            Join Discord Support
          </a>
        </section>
      </main>
    </>
  );
}
