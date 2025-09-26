'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import RadialTextGradient from '../RadialTextGradient';
import { useRef } from 'react';

export type TitleAndTextProps = {};

export default function TitleAndText(props: TitleAndTextProps) {
  return (
    <div className="py-12 lg:py-24 xl:py-36 px-4 md:px-8 lg:px-12 w-full flex justify-between">
      <div className="grid gap-12 max-w-prose w-5/6 text-pretty md:text-lg lg:text-[2vw] 2xl:text-3xl leading-[1.5] font-medium text-neutral-300">
        <p className="">
          O Seeds Collective é uma iniciativa de pesquisa e fotografia de
          sementes ancestrais brasileiras. Do fotógrafo Riccardo Riccio em
          colaboração com a aceleradora agroecológica Trovão Tropical e a
          escritora Mirna Wabi-Sabi, o Seeds and Tales tem a missão de
          foto-catalogar sementes crioulas guardadas há gerações por pequenos
          produtores, povos indígenas e comunidades quilombolas nos 5 biomas do
          Brasil.
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
