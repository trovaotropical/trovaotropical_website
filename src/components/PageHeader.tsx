'use client';

import { motion } from 'motion/react';
import RadialTextGradient from './RadialTextGradient';
import PhotoBomb from './home/PhotoBomb';

export type PageHeaderProps = {};

export default function PageHeader(props: PageHeaderProps) {
  return (
    <div className="relative min-h-svh flex items-center justify-center">
      <PhotoBomb />
      <div className="py-16 xl:py-36 px-4 md:px-8 xl:px-12 z-[2]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="uppercase lg:text-lg xl:text-xl tracking-widest relative"
        >
          Rio das sementes
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative"
        >
          <div
            className={`absolute w-full h-full top-0 left-0 z-10 bg-repeat opacity-70`}
            style={{
              backgroundImage: `url('/static/noise.png')`,
              backgroundSize: '320px 320px'
            }}
          ></div>
          <RadialTextGradient>Seeds collective</RadialTextGradient>
        </motion.div>
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
