'use client';

import { cn } from '@/lib/utils';
import { useRef, useEffect } from 'react';

export default function RadialTextGradient({
  children,
  size = 'md'
}: {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}) {
  const ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = (x: number, y: number) => {
      const rect = el.getBoundingClientRect();
      const xPct = ((x - rect.left) / rect.width) * 100;
      const yPct = ((y - rect.top) / rect.height) * 100;

      el.style.setProperty('--mouse-x', `${xPct}%`);
      el.style.setProperty('--mouse-y', `${yPct}%`);
    };

    const onMove = (e: MouseEvent) => update(e.clientX, e.clientY);
    const onLeave = () =>
      update(rect.left + rect.width / 2, rect.top + rect.height / 2);

    const rect = el.getBoundingClientRect();
    update(rect.left + rect.width / 2, rect.top + rect.height / 2);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <h1
      ref={ref}
      className={cn(
        'font-display text-[5.2vw] uppercase font-extrabold text-pretty leading-[1.05] mb-12 text-transparent bg-clip-text text-justify',
        size === 'sm' && 'text-[4vw] leading-[1.1]',
        size === 'lg' && 'text-[12vw] leading-[1]'
      )}
      style={{
        backgroundImage: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), white, #bbb 70%)`
      }}
    >
      {children}
    </h1>
  );
}
