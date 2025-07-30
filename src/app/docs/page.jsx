import React from "react";
import { Separator } from "@/components/ui/separator";

const Docs = () => {
  return (
    <>
      <main className="pt-8 sm:px-24">
        <div className="px-8 pr-6 pt-4 ">
          <section>
            <h1 className="text-5xl font-geo-bold font-kanit my-2">
              Docs - Mendora Client
            </h1>
            <Separator />
            <p className="font-space-grotesk p-6 bg-red-500 rounded-md">
              This Is Mendora Client Documentation Feel Free To Ask Or To
              Suggest Feature This Is Step By Step Guide To Install. Play. And
              Support.
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default Docs;
