'use client';

import { cn } from '@/lib/utils';
import { PenLine, VideoIcon } from 'lucide-react';
import ReactPlayer from 'react-player';
import ContentTypeIcon from './ContentTypeIcon';
import { Button } from './ui/button';

export type ArticleCardProps = {
  imgUrl?: string;
  title: string;
  description: string;
  size?: number;
};

export default function ArticleCard({
  imgUrl,
  title,
  description,
  size = 1
}: ArticleCardProps) {
  return (
    <div
      className={cn(
        'group rounded-xs aspect-[9/16] relative overflow-hidden bg-black text-white flex flex-col justify-start   col-span-1',
        size === 1 && ' md:col-span-1  ',
        size === 2 && 'sm:min-h-[50svh] md:col-span-2  md:aspect-[100/86]',
        size === 3 && ' sm:col-span-2 md:col-span-3 sm:aspect-[100/57]'
      )}
    >
      <ContentTypeIcon Icon={PenLine} dark={!Boolean(imgUrl)} />
      <div className="z-10 absolute bottom-0 left-0 w-full group-hover:opacity-100 opacity-0 duration-150">
        <Button variant={'secondary'} className="w-full">
          Leia mais
        </Button>
      </div>
      <div className="h-1/2 w-full relative">
        <img
          src={imgUrl}
          alt=""
          className="object-center object-cover w-full h-full"
        />
      </div>
      <div className="p-4 xl:p-6 h-1/2 overflow-hidden relative">
        <div className="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black to-transparent group-hover:via-transparent duration-150"></div>
        <h2 className="font-bold text-3xl xl:text-5xl mb-5">{title}</h2>
        <p className="text-lg text-muted mb-3">
          A união entre Milho, Feijão e Abóbora é ancestral. Ela é conhecida
          como as 'Três Irmãs', ou Milpa, uma palavra derivada da língua
          indígena Náhuatl, da família de línguas Uto-Astecas. Como uma técnica
          agrícola antiga usada nas Américas por povos nativos, as Três Irmãs
          representam uma epistemologia pré-colonial de relevância científica
          para a trajetória da existência humana.
        </p>
        <p className="text-lg text-muted mb-3">
          As sementes de milho, feijão e abóbora, quando plantadas juntas,
          maximizam a produtividade de cada uma das três, enriquece o solo, e
          contribui robustamente para a nutrição das pessoas. Elas se
          complementam não apenas em crescimento e desenvolvimento, mas também
          em valor nutricional.
        </p>
        <p className="text-lg text-muted">
          O milho, em sua busca pelo máximo de luz possível, cresce
          verticalmente e viabiliza uma estrutura estável para o feijão enramar.
          O feijão, por sua vez, fornece Nitrogênio ao solo, um elemento
          indispensável para o crescimento saudável de diversas plantas,
          inclusive do milho.
        </p>
      </div>
    </div>
  );
}
