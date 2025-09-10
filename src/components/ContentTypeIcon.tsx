'use client';

import { cn } from '@/lib/utils';
import { LucideProps } from 'lucide-react';
import React, { ForwardRefExoticComponent, JSX, RefAttributes } from 'react';

export type ContentTypeIconProps = {
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
  dark?: boolean;
};

export default function ContentTypeIcon({
  Icon,
  dark = false
}: ContentTypeIconProps) {
  return (
    <div
      className={cn(
        'bg-black/25 backdrop-blur-sm absolute top-3 right-3 size-8 flex items-center justify-center z-10 rounded-full',
        dark && 'bg-white/25'
      )}
    >
      <Icon className={cn('text-white size-4', dark && 'text-black')} />
    </div>
  );
}
