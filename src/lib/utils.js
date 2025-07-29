import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function serverLog(input) {
  console.log("[Mendora Debug]" + input);
}
