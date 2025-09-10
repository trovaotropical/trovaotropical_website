'use client';

import { ExternalLinkIcon, LinkIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import ContentTypeIcon from './ContentTypeIcon';

export type ExternalLinkCardProps = {
  imgUrl?: string;
  title: string;
  description: string;
  size?: number;
};

export default function ExternalLinkCard({
  imgUrl,
  title,
  description,
  size = 1
}: ExternalLinkCardProps) {
  return (
    <div
      className={cn(
        'group rounded-xl  relative overflow-hidden bg-black flex flex-col justify-end p-4  aspect-square col-span-1',
        size === 1 && !Boolean(imgUrl) && 'aspect-[4/3]',
        size === 1 && 'sm:min-h-[50svh] md:col-span-1 sm:aspect-auto ',
        size === 2 && 'sm:min-h-[50svh] md:col-span-2 sm:aspect-auto',
        size === 3 &&
          'sm:min-h-[50svh] sm:col-span-2 md:col-span-3 sm:aspect-auto',
        !Boolean(imgUrl) && 'p-0'
      )}
    >
      <ContentTypeIcon Icon={LinkIcon} dark={!Boolean(imgUrl)} />
      {Boolean(imgUrl) && (
        <div className="top-0 left-0 absolute h-full w-full">
          <img
            src={imgUrl}
            alt=""
            className="w-full h-full object-cover object-center group-hover:scale-105 duration-300"
          />
        </div>
      )}
      <div
        className={cn(
          'p-5 w-5/6 max-w-md bg-white text-black z-[5] rounded-md flex flex-col justify-between mt-24',
          !Boolean(imgUrl) && 'w-full h-full pt-10 pb-6 max-w-full mt-0'
        )}
      >
        <div>
          <h3
            className={cn(
              'font-bold text-xl !leading-[1.25] mb-2',
              size === 1 && 'text-base mb-0',
              size === 1 &&
                !Boolean(imgUrl) &&
                'text-2xl mb-3 md:text-3xl xl:text-4xl'
            )}
          >
            Seu exemplar te espera na Plataforma9
          </h3>
          <p
            className={cn(
              ' duration-300 ease-in text-xs text-pretty text-muted-foreground overflow-hidden',
              size === 1 &&
                Boolean(imgUrl) &&
                'md:max-h-0 group-hover:max-h-36 md:opacity-0 group-hover:opacity-100 pb-5 md:pb-3 group-hover:md:pb-5 group-hover:md:pt-2 pt-2',
              size === 1 &&
                !Boolean(imgUrl) &&
                'text-sm mb-5 lg:text-base xl:text-lg',
              size === 2 && 'mb-5',
              size === 3 && 'mb-5 text-sm'
            )}
          >
            Livro bilíngue: Português brasileiro/inglês estadunidense, 214
            páginas. Dimensões: 216mm x 216mm.
          </p>
        </div>
        <Link
          href="https://www.plataforma9p9.com/en/product-page/seeds-and-tales"
          target="_blank"
        >
          <Button className={cn('w-full h-12 duration-150 ')}>
            Adquirira o seu <ExternalLinkIcon />
          </Button>
        </Link>
      </div>
    </div>
  );
}
