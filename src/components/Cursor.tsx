'use client';

import React, { useEffect, useRef } from 'react';

type Props = { size?: number };

export default function Cursor({ size = 24 }: Props) {
  const elRef = useRef<HTMLDivElement | null>(null);
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    // Initialize position to center (so it doesn't jump on first frame)
    pos.current.x = window.innerWidth / 2;
    pos.current.y = window.innerHeight / 2;
    mouse.current.x = pos.current.x;
    mouse.current.y = pos.current.y;

    function onMove(e: MouseEvent) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    }

    window.addEventListener('mousemove', onMove);

    function frame() {
      // simple lerp for smooth following
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

      if (el) {
        el.style.transform = `translate3d(${pos.current.x - size / 2}px, ${
          pos.current.y - size / 2
        }px, 0)`;
      }

      raf.current = requestAnimationFrame(frame);
    }

    raf.current = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener('mousemove', onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [size]);

  return (
    <div
      ref={elRef}
      aria-hidden
      className="fixed top-0 left-0 rounded-full bg-white shadow-md pointer-events-none z-[2147483647] will-change-transform mix-blend-difference"
      style={{
        width: size,
        height: size,
        transform: 'translate3d(-50%, -50%, 0)'
      }}
    />
  );
}

/*
Usage:

import MouseFollower from "./MouseFollower";

function App() {
  return (
    <>
      <MouseFollower size={18} />
      <YourApp />
    </>
  );
}

Notes:
- This is a client component ("use client").
- It uses pointer-events: none so it won't block clicks.
- z-index is set to the max 32-bit signed integer to stay above other layers.
- Adjust `size` prop to change the diameter in pixels.
*/
