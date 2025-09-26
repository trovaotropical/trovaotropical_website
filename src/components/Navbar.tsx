'use client';

import Logo from './Logo';
import MainMenu from './MainMenu';

export type NavbarProps = {};

export default function Navbar(props: NavbarProps) {
  return (
    <div className="fixed w-full h-16 flex items-center justify-between gap-3 px-4 md:px-8 xl:px-12 text-white z-50">
      <Logo className="h-8 fill-white" />
      <div className="flex gap-5 items-center">
        <MainMenu />
      </div>
    </div>
  );
}
