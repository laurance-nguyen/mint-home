import { type ClassValue, clsx } from "clsx";
import PocketBase from "pocketbase";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const pb = new PocketBase(process.env.POCKETBASE_URL);
