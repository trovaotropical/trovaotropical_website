'use client';

import { motion } from 'motion/react';
import RadialTextGradient from '../RadialTextGradient';
import PhotoBomb from '../home/PhotoBomb';
import Title from './Title';

export type PageHeaderProps = {};

export default function PageHeader(props: PageHeaderProps) {
  return (
    <div className="relative min-h-svh flex items-center justify-center">
      <PhotoBomb className="z-1 mix-blend-screen absolute top-0 left-0 w-full h-full" />
      <div className="py-16 xl:py-36 px-4 md:px-8 xl:px-12 z-[2]">
        <Title label="Rio das sementes" title="Seeds collective" size="lg" />
        {/* <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-lg lg:text-xl xl:text-2xl max-w-[56ch] text-pretty"
      >
        Sementes crioulas guardadas há gerações por pequenos produtores, povos
        indígenas e comunidades quilombolas nos 5 biomas do Brasil.
      </motion.p> */}
      </div>
    </div>
  );
}
