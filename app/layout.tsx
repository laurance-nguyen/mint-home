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
        <div className='px-6 mt-10'>
          <div className="mb-5 flex w-full flex-col gap-1">
            <Image width={164} height={35} src="/logo.svg" alt="logo" />
            <p className="text-2xs tracking-widest text-primary">
              PASSION IN HOME DECOR
            </p>
          </div>

          <div className="mb-10 flex w-full flex-col gap-4 text-sm text-muted-foreground">
            <div>
              <p>+84 369 369 369</p>
              <p>+84 369 369 369</p>
            </div>
            <p>info@minthome.com</p>
            <p>
              Ha Huy Giap, Thanh Loc, Quan 12
              <br /> Thanh pho Ho Chi Minh
            </p>
          </div>

          <BlurryDivider />
          <p className="py-4 text-xs text-accent-foreground text-center">
            ©minthome 2023. All Rights Reserved
          </p>
        </div>

        <Analytics />
      </body>
    </html>
  );
}
