'use client';

import { motion } from 'motion/react';
import RadialTextGradient from '../RadialTextGradient';
import { cn } from '@/lib/utils';

export type TitleProps = {
  title: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

export default function Title({
  title,
  label,
  size = 'md',
  className
}: TitleProps) {
  return (
    <div className={className}>
      {Boolean(label) && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={cn(
            'lowercase text-base lg:text-xl xl:text-2xl tracking-widest mb-2 text-web-orange-500',
            size === 'sm' && 'text-sm lg:text-base xl:text-lg',
            size === 'lg' && 'text-lg lg:text-2xl xl:text-3xl'
          )}
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
          style={{}}
        ></div>
        <h1
          className={cn(
            'font-display text-[5.2vw] uppercase font-extrabold text-pretty leading-[1.05] mb-12 text-transparent absolute w-full h-full top-0 left-0 z-10 bg-repeat opacity-70 bg-clip-text text-justify',
            size === 'sm' && 'text-[4vw] leading-[1.1]',
            size === 'lg' && 'text-[12vw] leading-[1]'
          )}
          style={{
            backgroundImage: `url('/static/noise.png')`
            // backgroundSize: '320px 320px'
          }}
        >
          {title}
        </h1>
        <RadialTextGradient size={size}>{title}</RadialTextGradient>
      </motion.div>
    </div>
  );
}
