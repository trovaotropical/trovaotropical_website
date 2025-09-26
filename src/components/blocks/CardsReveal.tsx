'use client';

import {
  easeIn,
  easeInOut,
  motion,
  useScroll,
  useTransform
} from 'motion/react';
import { useRef } from 'react';
import RadialTextGradient from '../RadialTextGradient';
import Title from './Title';

export type CardsRevealProps = {};

export default function CardsReveal(props: CardsRevealProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end center']
  });
  const opacity1 = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
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

  const color1 = useTransform(
    scrollYProgress,
    [0.4, 0.42, 0.5, 0.51],
    ['#ffffffc9', '#ff5b5c', '#ff5b5c', '#333'],
    {
      ease: easeInOut
    }
  );
  const color2 = useTransform(
    scrollYProgress,
    [0.5, 0.52, 0.6, 0.61],
    ['#ffffffc9', '#ff5b5c', '#ff5b5c', '#333'],
    {
      ease: easeInOut
    }
  );
  const color3 = useTransform(
    scrollYProgress,
    [0.6, 0.62, 0.8, 0.81],
    ['#ffffffc9', '#ff5b5c', '#ff5b5c', '#333'],
    {
      ease: easeInOut
    }
  );
  return (
    <div
      ref={ref}
      className=" px-4 md:px-8 xl:px-12 lg:h-[300svh] w-full bg-black text-background"
    >
      <div className="lg:sticky top-0 lg:h-svh w-full flex items-center justify-center py-16">
        <div className="grid w-full">
          <Title
            title={'Pesquisa e fotografia de sementes ancestrais brasileiras'}
            label={'Etapas da Pesquisa'}
            size={'sm'}
          />
          <div className="grid lg:flex gap-4 md:gap-8 xl:gap-12 items-center justify-center w-full h-full ">
            <div className="w-full lg:w-1/3 aspect-[3/4] 2xl:aspect-square relative max-h-svh lg:max-h-[60svh] overflow-hidden">
              <motion.div
                className="absolute left-8 top-4 z-10 text-5xl lg:text-[4.6vw] font-bold text-vermelho-400"
                style={{ color: color1 }}
              >
                1
              </motion.div>
              <motion.div
                className="absolute top-0 left-0 w-full duration-300 z-[5] p-8 h-full flex items-end"
                style={{ clipPath: clipPath1 }}
              >
                <p className="xl:text-lg">
                  Ao longo de um ano viajamos pelo Brasil por terra, água e ar
                  para tentar entender mais sobre culturas alimentares nas
                  florestas e como a soberania alimentar se configurava em cada
                  bioma.
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
            <div className="w-full lg:w-1/3 aspect-[3/4] 2xl:aspect-square relative max-h-svh lg:max-h-[60svh] overflow-hidden">
              <motion.div
                className="absolute left-8 top-4 z-10 text-5xl lg:text-[4.6vw] font-bold text-vermelho-400"
                style={{ color: color2 }}
              >
                2
              </motion.div>
              <motion.div
                className="absolute top-0 left-0 w-full duration-300 z-[5] p-8 h-full flex items-end"
                style={{ clipPath: clipPath2 }}
              >
                <p className="xl:text-lg">
                  Das terras indígenas no noroeste do Acre, até às hortas
                  urbanas nas favelas do Rio de Janeiro. Resolvemos não só
                  registrar a exuberância que cada semente carrega, mas também
                  contar suas histórias de forma contínua ao legado pré-colonial
                  da palavra folclore, onde o significado etimológico do termo
                  'lore', a sabedoria ancestral, reside.
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
            <div className="w-full lg:w-1/3 aspect-[3/4] 2xl:aspect-square relative max-h-svh lg:max-h-[60svh] overflow-hidden">
              <motion.div
                className="absolute left-8 top-4 z-10 text-5xl lg:text-[4.6vw] font-bold text-vermelho-400"
                style={{ color: color3 }}
              >
                3
              </motion.div>
              <motion.div
                className="absolute top-0 left-0 w-full duration-300 z-[5] p-8 h-full flex items-end"
                style={{ clipPath: clipPath3 }}
              >
                <p className="xl:text-lg">
                  Essa pesquisa de campo foi frutífera graças ao acolhimento e
                  abertura das pessoas que se dispuseram a trocar suas sementes
                  e saberes conosco: os guardiões de sementes - que são
                  indivíduos comprometidos com o plantio e a proteção de
                  genéticas de sementes ancestrais crioulas.
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
