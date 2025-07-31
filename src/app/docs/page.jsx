import React from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Docs = () => {
  return (
    <>
      <main className="pt-8 sm:px-24">
        <div className="px-8 pr-6 pt-4 ">
          <section className="main-docs">
            <h1 className="text-5xl font-geo-bold font-kanit my-2">
              Docs - Mendora Client
            </h1>
            <Separator className="bg-zinc-600" />
            <p className="font-space-grotesk px-1 py-4 rounded-md">
              This Is Mendora Client Documentation Feel Free To Ask Or To
              Suggest Feature This Is Step By Step Guide To Install. Play. And
              Support.
            </p>
          </section>
          <section className="docs-topics">
            <h1 className="text-4xl font-geo-bold font-kanit my-2">
              Installation
            </h1>
            <Separator className="bg-zinc-600" />
            <div className="p-4 bg-red-500 rounded-xl mt-2">
              Make Sure You Download latest Java !
            </div>
            <p className="font-space-grotesk px-1 py-2 rounded-md">
              1. Go to{" "}
              <Button variant="link">
                <a
                  href="https://adoptium.net/temurin/releases/?version=21&os=any&arch=any"
                  className=" bg-blue-900 my-2 rounded-xl py-1 px-2"
                  target="_blank"
                >
                  Java 21 Download Website
                </a>{" "}
              </Button>
              And Install Java 21
            </p>
            <p className="font-space-grotesk px-1 py-2 rounded-md">
              2. When Java Is Installed You Can Download Mendora Client
            </p>
            <p className="font-space-grotesk px-1 py-2 rounded-md">
              3. Go to{" "}
              <Button variant="link">
                <Link
                  href="/download"
                  className=" bg-blue-900 my-2 rounded-xl py-1 px-2"
                >
                  https://mendora.qzz.io/download
                </Link>{" "}
              </Button>
              And Launcher Installer Will Be Automatically Installed
            </p>
            <p className="font-space-grotesk px-1 py-2 rounded-md">
              4. Open The Mendora Launcher Installer Executable File
            </p>
            <p className="font-space-grotesk px-1 py-2 rounded-md">
              5. Select Installation Destination
            </p>
            <p className="font-space-grotesk px-1 py-2 rounded-md">
              6. And All Set Open Launcher And Play!
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default Docs;
