import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Image from "next/image";

import BlurryDivider from "@/components/BlurryDivider";
import Header from "@/components/Header";
import { pb } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MINT home",
  description: "Passion in home decor",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  try {
    await pb.admins.authWithPassword(
      process.env.POCKETBASE_ADMIN_USERNAME ?? "",
      process.env.POCKETBASE_ADMIN_PASSWORD ?? "",
    );
  } catch (error) {
    // console.log({ error });
  }

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}

        <BlurryDivider />
        <p className="py-4 text-center text-xs text-accent-foreground">
          ©minthome 2023. All Rights Reserved
        </p>

        <Analytics />
      </body>
    </html>
  );
}
