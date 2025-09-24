'use client';

import { motion } from 'motion/react';
import RadialTextGradient from './RadialTextGradient';

export type TitleAndTextProps = {};

export default function TitleAndText(props: TitleAndTextProps) {
  return (
    <div className="py-16 lg:py-24 xl:py-36 px-4 md:px-8 xl:px-12 w-fit mx-auto">
      <div className="grid gap-5">
        <p className="text-lg lg:text-xl xl:text-2xl max-w-prose text-pretty">
          Ao longo de dois anos de expedições pelo país, o projeto coletou mais
          de 300 espécies de sementes únicas. E junto com os guardiões de
          sementes, registrou os saberes da cultura oral sobre o cultivo e
          manejo, propriedades espirituais e medicinais, e histórias incríveis
          sobre cada uma delas. Essa pesquisa está consolidada no livro-catálogo
          Seeds and Tales, lançado pela editora Plataforma9 em 2024.
        </p>

        <p className="text-lg lg:text-xl xl:text-2xl max-w-prose text-pretty">
          A venda da coleção de macro fotografias impressas em papel canvas para
          belas artes tem parte destinada no apoio a hortas urbanas, projetos de
          reflorestamento e o apoio ao plantio de agroflorestas sintrópicas nas
          comunidades indígenas e quilombolas no Brasil.{' '}
        </p>

        <p className="text-lg lg:text-xl xl:text-2xl max-w-prose text-pretty">
          Todas as espécies de sementes retratadas no projeto foram doadas,
          trocadas e finalmente plantadas para cumprir sua função ecológica na
          busca pela soberania alimentar, preservação genética de espécies
          ameaçadas e recuperação de biomas.
        </p>
      </div>
    </div>
  );
}
