'use client';
import { MenuIcon, Search } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export type MainMenuProps = { className?: string };

export default function MainMenu({ className }: MainMenuProps) {
  return (
    <ul className={cn('flex gap-0', className)}>
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
  );
}
