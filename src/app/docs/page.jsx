"use client"
import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaWindows, FaApple, FaLinux } from "react-icons/fa";

const Docs = () => {
  const [selectedOS, setSelectedOS] = useState(null);

  return (
    <>
      <main className="pt-8 sm:px-24">
        <div className="px-8 pr-6 pt-4">
          <section className="main-docs">
            <h1 className="text-5xl font-geo-bold font-kanit my-2">
              Docs - Mendora Client
            </h1>
            <Separator className="bg-zinc-600" />

            {!selectedOS && (
              <div className="my-6">
                <p className="font-space-grotesk mb-4">
                  Please select your Operating System to continue:
                </p>
               <div className="flex gap-4 my-6">
  <Button
    onClick={() => setSelectedOS("windows")}
    className={`flex items-center gap-2 px-6 py-3 rounded-xl text-white transition ${
      selectedOS === "windows" ? "bg-blue-700" : "bg-blue-600 hover:bg-blue-700"
    }`}
  >
    <FaWindows /> Windows
  </Button>

  <Button
    onClick={() => setSelectedOS("macos")}
    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-500 text-white opacity-60 cursor-not-allowed"
    disabled
  >
    <FaApple /> macOS
  </Button>

  <Button
    onClick={() => setSelectedOS("linux")}
    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-500 text-white opacity-60 cursor-not-allowed"
    disabled
  >
    <FaLinux /> Linux
  </Button>
</div>
              </div>
            )}

            {selectedOS === "macos" || selectedOS === "linux" ? (
              <div className="mt-8 p-4 bg-red-600 text-white rounded-xl">
                ❌ OS not supported right now. You may come back later.
              </div>
            ) : null}
          </section>

          {selectedOS === "windows" && (
            <section className="docs-topics mt-6">
              <h1 className="text-4xl font-geo-bold font-kanit my-2">Installation</h1>
              <Separator className="bg-zinc-600" />
              <p className="font-space-grotesk px-1 py-2 rounded-md">
                1. Go to{" "}
                <Button variant="link">
                  <a
                    href="https://adoptium.net/temurin/releases/?version=21&os=any&arch=any"
                    className="bg-blue-900 my-2 rounded-xl py-1 px-2"
                    target="_blank"
                  >
                    Java 21 Download Website
                  </a>
                </Button>{" "}
                and install Java 21.
              </p>

              <p className="font-space-grotesk px-1 py-2 rounded-md">
                2. When Java is installed, you can download Mendora Client.
              </p>

              <p className="font-space-grotesk px-1 py-2 rounded-md">
                3. Go to{" "}
                <Button variant="link">
                  <Link
                    href="/download"
                    className="bg-blue-900 my-2 rounded-xl py-1 px-2"
                  >
                    https://mendora.qzz.io/download
                  </Link>
                </Button>{" "}
                and the client installer will be automatically downloaded.
              </p>

              <p className="font-space-grotesk px-1 py-2 rounded-md">
                4. Open the Mendora Client installer executable file.
              </p>

              <p className="font-space-grotesk px-1 py-2 rounded-md">
                5. Select installation destination.
              </p>

              <p className="font-space-grotesk px-1 py-2 rounded-md">
                6. All set! Open the Client and play!
              </p>
            </section>
          )}
        </div>
      </main>
    </>
  );
};

export default Docs;
