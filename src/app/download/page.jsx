"use client";

import React, { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Download = () => {
  const router = useRouter();

  useEffect(() => {
    async function fetchVersionAndRedirect() {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/ma4z-sys/Mendora_Updates/refs/heads/main/version.json"
        );

        const version = response.data.version;

        if (version) {
          // Track download on server side
          await axios.post("/api/download", {
            action: "download",
            version: version,
          });

          const installerUrl = `https://github.com/ma4z-sys/src_mendora/releases/download/assets/Mendora.Launcher.Setup.${version}.exe`;

          // Open installer in new tab
          window.open(installerUrl, "_blank", "noopener,noreferrer");
          // Redirect current tab to homepage
          router.replace("/");
        } else {
          router.replace("/");
        }
      } catch (error) {
        console.error("Error fetching version info:", error);
        router.replace("/");
      }
    }

    fetchVersionAndRedirect();
  }, [router]);

  return null;
};

export default Download;
