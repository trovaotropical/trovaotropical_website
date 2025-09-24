'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useAnimationFrame } from 'motion/react';
import Logo from '../Logo';
import { Button } from '../ui/button';
import { Pause, Play } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

export type PhotoBombProps = { className?: string };

const MotionLogo = motion.create(Logo);
const totalFrames = 10;

function randSumSub(a: number, b: number) {
  return Math.random() <= 0.5 ? a - b : a + b;
}

export default function PhotoBomb({ className }: PhotoBombProps) {
  const ref = useRef(null);
  const [frame, setFrame] = useState(0);
  const [tick, setTick] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [play, setPlay] = useState(true);

  // Preload images
  useEffect(() => {
    const promises = [...Array(totalFrames).keys()].map((n) => {
      if (n === 0) return Promise.resolve(); // skip index 0
      const src = `./static/animation/${n}.jpg`;
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    });

    Promise.all(promises)
      .then(() => setLoaded(true))
      .catch((err) => {
        console.error('Failed to load one or more frames', err);
        setLoaded(true); // still continue, fallback
      });
  }, []);

  useAnimationFrame((time) => {
    if (!loaded || !play) return; // don't tick until all are loaded
    const currentFrame = (Math.round(time / 500) % totalFrames) + 1;
    if (currentFrame !== frame) {
      setFrame(currentFrame);
    }
  });

  return (
    <div
      ref={ref}
      className={cn('absolute top-0 left-0 w-full h-full', className)}
    >
      {!loaded && <div className="absolute z-20 text-lg">Loading…</div>}

      {/* <div className="absolute z-30 bottom-0 w-24 right-0 font-mono text-sm flex flex-col gap-2 p-3 bg-black/50 text-white text-center">
        {frame} / {totalFrames}
        <Progress value={(frame / totalFrames) * 100} />
        <Button variant={'default'} onClick={() => setPlay((prev) => !prev)}>
          {play ? (
            <Pause className="size-6 fill-muted stroke-0" />
          ) : (
            <Play className="size-6 fill-muted stroke-0" />
          )}
        </Button>
      </div> */}

      {loaded && (
        <div className="h-full w-full relative">
          {[...Array(10).keys()].map((n) => {
            if (frame < n || frame > n + 2) return null;
            return (
              <div className="absolute w-full h-full top-0 left-0">
                <div
                  key={`seed_${n}`}
                  className="relative h-full w-full aspect-video shrink-0 "
                >
                  <motion.img
                    className="w-full h-full object-cover object-center"
                    src={`./static/animation/${n < 10 ? `${n}` : n}.jpg`}
                    style={{
                      zIndex: n
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
