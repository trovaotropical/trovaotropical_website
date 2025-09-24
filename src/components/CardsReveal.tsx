'use client';

import {
  easeIn,
  easeInOut,
  motion,
  useScroll,
  useTransform
} from 'motion/react';
import { useRef } from 'react';

export type CardsRevealProps = {};

export default function CardsReveal(props: CardsRevealProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end center']
  });
  const opacity1 = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.05, 0.1], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.1, 0.15], [0, 1]);
  const clipPath1 = useTransform(
    scrollYProgress,
    [0.4, 0.5],
    [
      'polygon(0 0, 0 0, 0 100%, 0 100%)',
      'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
    ],
    {
      ease: easeInOut
    }
  );
  const width1 = useTransform(scrollYProgress, [0.4, 0.5], ['0%', '100%'], {
    ease: easeInOut
  });
  const clipPath2 = useTransform(
    scrollYProgress,
    [0.48, 0.6],
    [
      'polygon(0 0, 0 0, 0 100%, 0 100%)',
      'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
    ],
    {
      ease: easeInOut
    }
  );
  const width2 = useTransform(scrollYProgress, [0.48, 0.6], ['0%', '100%'], {
    ease: easeInOut
  });
  const clipPath3 = useTransform(
    scrollYProgress,
    [0.58, 0.7],
    [
      'polygon(0 0, 0 0, 0 100%, 0 100%)',
      'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
    ],
    {
      ease: easeInOut
    }
  );
  const width3 = useTransform(scrollYProgress, [0.58, 0.7], ['0%', '100%'], {
    ease: easeInOut
  });
  return (
    <div
      ref={ref}
      className="lg:h-[300svh] w-full px-4 md:px-8 xl:px-12 bg-black text-background"
    >
      <div className="lg:sticky top-0 lg:h-svh w-full flex items-center justify-center py-16">
        <div className="grid w-full">
          <motion.h1 className="uppercase font- tracking-widest text-xl mb-16 font-display">
            Etapas da Pesquisa
          </motion.h1>
          <div className="grid lg:flex gap-0 items-center justify-center w-full h-full">
            <div className="w-full lg:w-1/3 aspect-[3/4] 2xl:aspect-square relative max-h-svh overflow-hidden">
              <div className="absolute left-8 top-4 z-10 text-7xl font-bold">
                1
              </div>
              <motion.div
                className="absolute top-0 left-0 w-full duration-300 z-[5] p-8 h-full flex items-end"
                style={{ clipPath: clipPath1 }}
              >
                <p className="xl:text-lg">
                  Ao longo de dois anos de expedições pelo país, o projeto
                  coletou mais de 300 espécies de sementes únicas. E junto com
                  os guardiões de sementes, registrou os saberes da cultura oral
                  sobre o cultivo e manejo, propriedades espirituais e
                  medicinais.
                </p>
              </motion.div>
              <motion.div
                className="absolute top-0 left-0 w-full bg-black duration-300 z-[4] h-full border-r"
                style={{ width: width1 }}
              ></motion.div>
              <motion.img
                src="./static/seed.jpg"
                alt=""
                className="w-full h-full object-cover object-center"
                style={{ opacity: opacity1 }}
              />
            </div>{' '}
            <div className="w-full lg:w-1/3 aspect-[3/4] 2xl:aspect-square relative max-h-svh overflow-hidden">
              <div className="absolute left-8 top-4 z-10 text-7xl font-bold">
                2
              </div>
              <motion.div
                className="absolute top-0 left-0 w-full duration-300 z-[5] p-8 h-full flex items-end"
                style={{ clipPath: clipPath2 }}
              >
                <p className="xl:text-lg">
                  Ao longo de dois anos de expedições pelo país, o projeto
                  coletou mais de 300 espécies de sementes únicas. E junto com
                  os guardiões de sementes, registrou os saberes da cultura oral
                  sobre o cultivo e manejo, propriedades espirituais e
                  medicinais.
                </p>
              </motion.div>
              <motion.div
                className="absolute top-0 left-0 w-full bg-black duration-300 z-[4] h-full border-r"
                style={{ width: width2 }}
              ></motion.div>
              <motion.img
                src="./static/seed2.jpg"
                alt=""
                className="w-full h-full object-cover object-center"
                style={{ opacity: opacity2 }}
              />
            </div>{' '}
            <div className="w-full lg:w-1/3 aspect-[3/4] 2xl:aspect-square relative max-h-svh overflow-hidden">
              <div className="absolute left-8 top-4 z-10 text-7xl font-bold">
                3
              </div>
              <motion.div
                className="absolute top-0 left-0 w-full duration-300 z-[5] p-8 h-full flex items-end"
                style={{ clipPath: clipPath3 }}
              >
                <p className="xl:text-lg">
                  Ao longo de dois anos de expedições pelo país, o projeto
                  coletou mais de 300 espécies de sementes únicas. E junto com
                  os guardiões de sementes, registrou os saberes da cultura oral
                  sobre o cultivo e manejo, propriedades espirituais e
                  medicinais.
                </p>
              </motion.div>
              <motion.div
                className="absolute top-0 left-0 w-full bg-black duration-300 z-[4] h-full border-r"
                style={{ width: width3 }}
              ></motion.div>
              <motion.img
                src="./static/seed3.jpg"
                alt=""
                className="w-full h-full object-cover object-center"
                style={{ opacity: opacity3 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
