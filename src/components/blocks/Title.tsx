'use client';

import { motion } from 'motion/react';
import RadialTextGradient from '../RadialTextGradient';

export type TitleProps = {
  title: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
};

export default function Title({ title, label, size = 'md' }: TitleProps) {
  return (
    <div>
      {Boolean(label) && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="uppercase text-sm lg:text-base xl:text-lg tracking-widest mb-2 text-web-orange-500"
        >
          {label}
        </motion.p>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative"
      >
        <div
          className={`absolute w-full h-full top-0 left-0 z-10 bg-repeat opacity-70 `}
          style={{
            backgroundImage: `url('/static/noise.png')`,
            backgroundSize: '320px 320px'
          }}
        ></div>
        <RadialTextGradient size={size}>{title}</RadialTextGradient>
      </motion.div>
    </div>
  );
}
