'use client';

import { useRef } from 'react';
import Title from './Title';
import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from '../ui/button';
import Marquee from 'react-fast-marquee';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export type ImageBackgroundProps = {};

export default function ImageBackground(props: ImageBackgroundProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end center']
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  return (
    <div
      className="py-12 lg:py-24 xl:py-36 px-4 md:px-8 lg:px-12 w-full min-h-svh bg-fixed bg-cover bg-center relative"
      style={{ backgroundImage: 'url("/static/book.jpg")' }}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-white"
        style={{ opacity }}
      ></motion.div>
      <div className="relative flex flex-col gap-12 z-2">
        <div ref={ref} className="min-h-[80svh] flex items-center">
          <Title
            title="Seeds and Tales"
            label="Livro-catálogo"
            size="lg"
            className="w-full"
          />
        </div>

        <motion.div
          className="grid gap-12 max-w-prose w-5/6 text-pretty md:text-lg lg:text-[2vw] 2xl:text-3xl leading-[1.5] font-medium text-black"
          style={{ opacity: opacity2 }}
        >
          <p className="">
            Ao longo de dois anos de expedições pelo Brasil, o projeto Seeds
            coletou mais de 300 espécies de sementes únicas. E junto com os
            guardiões de sementes, registrou os saberes da cultura oral sobre o
            cultivo e manejo, propriedades espirituais e medicinais, e histórias
            incríveis sobre cada uma delas. Essa pesquisa está consolidada no
            livro-catálogo Seeds and Tales, lançado pela editora Plataforma 9 em
            2024.
          </p>
          <p className="">
            A venda da coleção de macro fotografias impressas em papel canvas
            para belas artes tem parte destinada no apoio a hortas urbanas,
            projetos de reflorestamento e o apoio ao plantio de agroflorestas
            sintrópicas nas comunidades indígenas e quilombolas no Brasil.{' '}
          </p>
        </motion.div>
        <div className="grid gap-8 items-end">
          <img
            src="https://static.wixstatic.com/media/eedbf4_9ead208b03054fe3a05132be1f3f94c9~mv2.gif"
            alt=""
          />
          <Link
            href="https://www.plataforma9p9.com/product-page/seeds-and-tales"
            target="_blank"
            className="text-vermelho-700 bg-transparent underline md:text-lg lg:text-[2vw] 2xl:text-3xl leading-[1.5] flex items-center gap-2"
          >
            Encomende sua cópia aqui <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
