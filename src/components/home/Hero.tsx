'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useAnimationFrame } from 'motion/react';
import Logo from '../Logo';
import { Button } from '../ui/button';
import { Pause, Play } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export type HeroProps = {};

const MotionLogo = motion.create(Logo);
const totalFrames = 60;

function randSumSub(a: number, b: number) {
  return Math.random() <= 0.5 ? a - b : a + b;
}

export default function Hero(props: HeroProps) {
  const ref = useRef(null);
  const [frame, setFrame] = useState(0);
  const [tick, setTick] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [play, setPlay] = useState(true);

  // Preload images
  useEffect(() => {
    const totalFrames = 24;
    const promises = [...Array(totalFrames).keys()].map((n) => {
      if (n === 0) return Promise.resolve(); // skip index 0
      const src = `./static/seed/frame_00${n < 10 ? `0${n}` : n}.jpg`;
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
    const currentFrame = (Math.round(time / 160) % totalFrames) + 1;
    if (currentFrame !== frame) {
      setFrame(currentFrame);
    }
  });

  return (
    <div
      ref={ref}
      className="relative w-full max-w-svw h-svh overflow-hidden flex flex-col items-center justify-center uppercase"
    >
      {!loaded && <div className="absolute z-20 text-lg">Loading…</div>}

      <div className="absolute z-30 bottom-0 w-24 right-0 font-mono text-sm flex flex-col gap-2 p-3 bg-black/50 text-white text-center">
        {frame} / {totalFrames}
        <Progress value={(frame / totalFrames) * 100} />
        <Button variant={'default'} onClick={() => setPlay((prev) => !prev)}>
          {play ? (
            <Pause className="size-6 fill-muted stroke-0" />
          ) : (
            <Play className="size-6 fill-muted stroke-0" />
          )}
        </Button>
      </div>
      {frame < 40 && (
        <div
          className="absolute w-full h-full z-20 bg-[url('https://static.wixstatic.com/media/368a90_4bea2d42394a4f3d8ad7feb099329594~mv2.jpg')] bg-cover bg-center top-0 left-0 flex items-center justify-center text-white duration-[1s] ease-in-out"
          style={{
            clipPath: `circle(${frame <= 20 ? '0' : '100'}% at 50% 50%)`
          }}
        >
          <h1 className="font-bold text-[8vw] w-min leading-[1] mix-blend-difference">
            cadê as notas que estavam aqui?
          </h1>
        </div>
      )}
      {frame >= 40 && (
        <div className="absolute w-full h-full z-20 bg-white bg-cover bg-center top-0 left-0 flex items-center justify-center text-black duration-[1.5s] ease-in">
          <h1 className="font-bold text-[8vw] w-min leading-[1]">
            não preciso delas
          </h1>
        </div>
      )}

      {loaded && frame < 27 && (
        <div className="grid grid-cols-1 md:grid-cols-5 items-center justify-center gap-16 p-16 w-full">
          <div className="col-span-2">
            <div className="aspect-square w-full relative">
              {[...Array(27).keys()].map((n) => {
                if (frame < n || frame > n + 2) return null;
                return (
                  <div className="absolute w-full h-full top-0 left-0">
                    <div
                      key={`seed_${n}`}
                      className="relative h-full w-full shrink-0 "
                    >
                      <motion.img
                        className="w-full h-full object-cover object-center"
                        src={`./static/seed/frame_00${
                          n < 10 ? `0${n}` : n
                        }.jpg`}
                        style={{
                          zIndex: n,
                          opacity: frame === n ? '100%' : '80%',
                          transform: `rotate(${randSumSub(
                            0,
                            Math.random() * 12
                          )}deg) translate(${randSumSub(
                            0,
                            Math.random() * 12
                          )}px,${randSumSub(0, Math.random() * 12)}px)`
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-3 font-bold text-[8vw] md:text-[6vw] leading-[1] text-center md:text-left">
            {frame < 12 && (
              <>
                <span style={{ opacity: frame >= 1 ? '100%' : 0 }}>
                  modernizar{' '}
                </span>
                <br />
                <span style={{ opacity: frame >= 3 ? '100%' : 0 }}>o </span>
                <span style={{ opacity: frame >= 4 ? '100%' : 0 }}>
                  passado.
                </span>
              </>
            )}
            {frame >= 12 && (
              <>
                <span style={{ opacity: frame >= 12 ? '100%' : 0 }}>é </span>
                <span style={{ opacity: frame >= 13 ? '100%' : 0 }}>uma </span>
                <span style={{ opacity: frame >= 14 ? '100%' : 0 }}>
                  evolução{' '}
                </span>
                <span style={{ opacity: frame >= 15 ? '100%' : 0 }}>
                  musical.
                </span>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
