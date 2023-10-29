'use client';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import Image from 'next/image';
import { usePathname,useRouter } from 'next/navigation'
import React from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const MENU_ITEMS = [
  { key: 'home', label: 'Trang chủ', pathname: '/' },
  { key: 'about', label: 'Giới thiệu', pathname: '/about' },
  { key: 'project', label: 'Dự án', pathname: '/project' },
  { key: 'blog', label: 'Blog', pathname: '/blog' },
  { key: 'process', label: 'Quy trình thiết kế', pathname: '/process' },
];

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-3 px-4 sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Image width={164} height={35} src="/logo.svg" alt="logo" />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <HamburgerMenuIcon height={30} width={30} />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-52">
          {MENU_ITEMS.map((item) => (
            <DropdownMenuItem
              onSelect={() => {
                router.push(item.pathname);
              }}
              className={clsx(pathname === item.pathname && 'bg-accent')}
              key={item.key}
            >
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
