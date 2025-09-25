'use client';

import { MenuIcon, Search } from 'lucide-react';
import Logo from './Logo';
import { Button } from './ui/button';

export type NavbarProps = {};

export default function Navbar(props: NavbarProps) {
  return (
    <div className="fixed w-full h-16 flex items-center justify-between gap-3 px-4 md:px-8 xl:px-12 text-white z-50">
      <Logo className="h-8 fill-white" />
      <div className="flex gap-5 items-center">
        <ul className="flex gap-0">
          <li>
            <Button variant="link" className="text-white cursor-pointer">
              palavra
            </Button>
          </li>
          <li>
            <Button variant="link" className="text-white cursor-pointer">
              semente
            </Button>
          </li>
          <li>
            <Button variant="link" className="text-white cursor-pointer">
              comunidade
            </Button>
          </li>
          <li>
            <Button
              variant="link"
              className="text-white cursor-pointer hover:bg-white hover:text-black"
            >
              <MenuIcon />
            </Button>
          </li>
          <li>
            <Button
              variant="link"
              className="text-white cursor-pointer hover:bg-white hover:text-black"
            >
              <Search />
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
