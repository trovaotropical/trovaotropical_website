'use client';

import LogoVertical from './LogoVertical';
import MainMenu from './MainMenu';

export type FooterProps = {};

export default function Footer(props: FooterProps) {
  return (
    <footer className="bg-white py-12 w-full px-4 md:px-8 xl:px-12 flex items-center justify-between gap-3">
      <LogoVertical className="fill-black h-16 lg:h-24" />
      <div className="flex gap-5 items-center">
        <MainMenu className="[&>li>button]:text-black" />
      </div>
    </footer>
  );
}
