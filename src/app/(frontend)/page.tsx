'use client';

import { ReactLenis, useLenis } from 'lenis/react';

import CardsReveal from '@/components/blocks/CardsReveal';
import PageHeader from '@/components/blocks/PageHeader';
import PhotosGrid from '@/components/blocks/PhotosGrid';
import TitleAndText from '@/components/blocks/TitleAndText';

export type IndexPageProps = {};

export default function IndexPage(props: IndexPageProps) {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis);
  });
  return (
    <>
      <ReactLenis root />
      <div className="bg-black text-background">
        <PageHeader />
        <TitleAndText />
        <CardsReveal />
        <PhotosGrid />
      </div>
    </>
  );
}
