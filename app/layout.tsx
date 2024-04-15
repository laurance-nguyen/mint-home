import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import BlurryDivider from "@/components/BlurryDivider";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";

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
          {`©minthome ${new Date().getFullYear()}. All Rights Reserved`}
        </p>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
