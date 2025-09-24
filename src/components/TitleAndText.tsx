'use client';

import { motion } from 'motion/react';
import RadialTextGradient from './RadialTextGradient';

export type TitleAndTextProps = {};

export default function TitleAndText(props: TitleAndTextProps) {
  return (
    <div className="py-12 lg:py-16 xl:py-24 px-4 md:px-8 xl:px-12 w-fit mx-auto">
      <div className="grid gap-5 max-w-5/6 ml-auto text-pretty lg:text-[2.4vw] font-medium">
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
