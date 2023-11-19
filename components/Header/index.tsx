"use client";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { FacebookIcon, InstagramIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

import { MENU_ITEMS } from "@/lib/constants";

import TikTokIcon from "../TikTokIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-background/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Link href="/">
        <Image width={164} height={35} src="/logo.svg" alt="logo" />
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger asChild className="lg:hidden">
          <HamburgerMenuIcon height={30} width={30} />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-52">
          {MENU_ITEMS.map((item) => (
            <DropdownMenuItem
              onSelect={() => {
                router.push(item.pathname);
              }}
              className={clsx(pathname === item.pathname && "bg-accent")}
              key={item.key}
            >
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <nav className="flex items-center gap-16 max-lg:hidden">
        <ul className="flex items-center gap-6">
          {MENU_ITEMS.map((item) => (
            <li
              key={item.key}
              className={clsx(
                "text-sm font-medium uppercase",
                pathname === item.pathname &&
                  "border-b-2 border-primary font-semibold text-primary",
              )}
            >
              <Link href={item.pathname}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link href="https://www.tiktok.com/">
            <TikTokIcon />
          </Link>
          <Link href="https://www.instagram.com/">
            <InstagramIcon />
          </Link>
          <Link href="https://www.facebook.com/">
            <FacebookIcon />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
