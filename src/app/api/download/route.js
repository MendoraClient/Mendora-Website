import { NextResponse } from "next/server";
import { serverLog } from "@/lib/utils";

// Server-side logging function

export async function POST(request) {
  try {
    const { version, action } = await request.json();

    if (action === "download") {
      serverLog("");
      serverLog(`🚀 Mendora Client V${version} Downloaded By User`);
      serverLog(
        `🌐 User Agent: ${request.headers.get("user-agent") || "unknown"}`
      );
      serverLog("");
      serverLog("Mendora Client Landing Page...");

      // You can also track downloads in a database here
      // await trackDownloadInDB(version);

      return NextResponse.json({
        success: true,
        message: "Download tracked successfully",
      });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    serverLog(`❌ Error tracking download: ${error.message}`);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
