'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import RadialTextGradient from '../RadialTextGradient';
import { useRef } from 'react';

export type TitleAndTextProps = {};

export default function TitleAndText(props: TitleAndTextProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 75%', 'end end']
  });
  const height = useTransform(scrollYProgress, [0, 1], ['0', '380px']);
  return (
    <div
      ref={ref}
      className="py-12 lg:py-24 xl:py-36 px-4 md:px-8 lg:px-12 w-full flex justify-between"
    >
      <motion.div
        className="w-16 bg-repeat flex items-end"
        style={{
          backgroundImage: "url('/static/animation/10.jpg')",
          backgroundSize: '100%',
          height
        }}
      >
        <div className="w-full h-full bg-gradient-to-t from-black via-transparent to-black"></div>
      </motion.div>
      <div className="grid gap-12 max-w-prose w-5/6 text-pretty md:text-lg lg:text-[2vw] 2xl:text-3xl leading-[1.5] font-medium text-neutral-300">
        <p className="">
          Ao longo de dois anos de expedições pelo país, o projeto coletou mais
          de 300 espécies de sementes únicas. E junto com os guardiões de
          sementes, registrou os saberes da cultura oral sobre o cultivo e
          manejo, propriedades espirituais e medicinais, e histórias incríveis
          sobre cada uma delas. Essa pesquisa está consolidada no livro-catálogo
          Seeds and Tales, lançado pela editora Plataforma9 em 2024.
        </p>

        <p className="">
          A venda da coleção de macro fotografias impressas em papel canvas para
          belas artes tem parte destinada no apoio a hortas urbanas, projetos de
          reflorestamento e o apoio ao plantio de agroflorestas sintrópicas nas
          comunidades indígenas e quilombolas no Brasil.{' '}
        </p>

        <p className="">
          Todas as espécies de sementes retratadas no projeto foram doadas,
          trocadas e finalmente plantadas para cumprir sua função ecológica na
          busca pela soberania alimentar, preservação genética de espécies
          ameaçadas e recuperação de biomas.
        </p>
      </div>
    </div>
  );
}
