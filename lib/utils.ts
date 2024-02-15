import { type ClassValue, clsx } from "clsx";
import Client from "pocketbase";
import PocketBase from "pocketbase";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

let pb: Client;

export const getAdminClient = async () => {
  if (!pb) {
    pb = new PocketBase(`https://${process.env.POCKETBASE_DOMAIN}`);

    // maybe also disable auto cancellation for the admin client
    // in case of concurrent requests from different component handlers
    pb.autoCancellation(false);

    await pb.admins.authWithPassword(
      process.env.POCKETBASE_ADMIN_USERNAME ?? "",
      process.env.POCKETBASE_ADMIN_PASSWORD ?? "",
      {
        // This will trigger auto refresh or auto reauthentication in case
        // the token has expired or is going to expire in the next 30 minutes.
        autoRefreshThreshold: 30 * 60,
      },
    );
  }
  return pb;
};
