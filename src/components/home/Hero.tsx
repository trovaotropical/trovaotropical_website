'use client';

import { useRef, useState } from 'react';
import { useAnimationFrame } from 'motion/react';

export type HeroProps = {};

export default function Hero(props: HeroProps) {
  const ref = useRef(null);
  const [tick, setTick] = useState(0);

  useAnimationFrame((time, delta) => {
    console.log(Math.round(time / 1000));
    const elapsedSeconds = Math.round(time / 100) % 64;
    if (elapsedSeconds !== tick) setTick(elapsedSeconds);
  });

  return (
    <div
      ref={ref}
      className="w-full h-svh overflow-hidden bg-black text-white flex flex-col items-center justify-center"
    >
      {tick < 6 && (
        <img
          src="https://trovaotropical.netlify.app/static/seed.jpg"
          className="h-96"
          alt=""
        />
      )}

      {tick < 12 && tick >= 6 && (
        <img
          src="https://static.wixstatic.com/media/368a90_4bea2d42394a4f3d8ad7feb099329594~mv2.jpg/v1/fill/w_1812,h_1360,fp_0.50_0.50,q_90,enc_avif,quality_auto/368a90_4bea2d42394a4f3d8ad7feb099329594~mv2.jpg"
          className="h-96"
          alt=""
        />
      )}
      {tick < 18 && tick >= 12 && (
        <img
          src="https://trovaotropical.netlify.app/static/seed2.jpg"
          className="h-96"
          alt=""
        />
      )}
      {tick < 24 && tick >= 18 && (
        <img
          src="https://trovaotropical.netlify.app/static/seed3.jpg"
          className="h-96"
          alt=""
        />
      )}
      <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold">
        {tick < 12 && <>Nois descreve as coisa</>}
        {tick < 24 && tick >= 12 && <>e faz os vídeo</>}
        <>
          {tick < 36 && tick >= 24 && (
            <>
              pode
              <br />
            </>
          )}
          {tick < 36 && tick >= 28 && (
            <>
              ser
              <br />
            </>
          )}
          {tick < 36 && tick >= 32 && <>rápido</>}
        </>
        {tick >= 36 && <>ou como a gente quiser!</>}
        {tick >= 44 && (
          <img
            src="https://i.pinimg.com/564x/72/64/45/726445e2cdd8f14fa3ed0258009c1cac.jpg"
            alt=""
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 duration-150"
            style={{ transform: `scale(${(tick - 44) / 12})` }}
          />
        )}
      </h1>
    </div>
  );
}
