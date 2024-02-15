import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Image from "next/image";

import BlurryDivider from "@/components/BlurryDivider";
import Header from "@/components/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MINT home",
  description: "Passion in home decor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
