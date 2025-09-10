'use client';

import { cn } from '@/lib/utils';
import { Images } from 'lucide-react';
import ContentTypeIcon from './ContentTypeIcon';

export type ImageGalleryCardProps = {
  imgUrl: string;
  title: string;
  description: string;
  size?: number;
};

export default function ImageGalleryCard({
  imgUrl,
  title,
  description,
  size = 1
}: ImageGalleryCardProps) {
  return (
    <div
      className={cn(
        'shrink-0 group cursor-pointer rounded-xl relative overflow-hidden border border-white/10 bg-black aspect-[9/16] max-h-[calc(100svh-10rem)',
        size === 1 && 'sm:col-span-1 md:col-span-1',
        size === 2 && 'sm:col-span-2 md:col-span-2 sm:aspect-[100/86]',
        size === 3 && 'sm:col-span-2 md:col-span-3 sm:aspect-[100/57]'
      )}
    >
      <ContentTypeIcon Icon={Images} />{' '}
      <div className="absolute top-0 left-0 w-full h-full z-[2]">
        <img
          src={imgUrl}
          alt=""
          className="w-full h-full object-cover object-center hidden group-hover:opacity-50 group-hover:block group-active:scale-105 top-0 group-hover:blur-xs mix-blend-lighten"
        />
      </div>
      <img
        src={imgUrl}
        alt=""
        className="w-full h-full object-cover object-centergroup-hover:blur-xs group-hover:opacity-100 duration-300 group-active:scale-105"
      />
      <div
        className={cn(
          'opacity-0 group-hover:opacity-100 duration-300 flex absolute w-full flex-col items-start justify-end z-10 bottom-0 left-0 p-4 pb-6 bg-gradient-to-t from-black/70 via-black/40 to-black/0 pt-12 min-h-1/3',
          size === 1 && 'min-h-1/2'
        )}
      >
        <h2 className={cn('font-bold', size === 3 && 'text-lg')}>{title}</h2>
        <p
          className={cn(
            'text-xs text-pretty max-w-prose',
            size === 3 && 'text-base'
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
