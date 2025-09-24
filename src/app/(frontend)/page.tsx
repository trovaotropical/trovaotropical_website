import CardsReveal from '@/components/CardsReveal';
import Hero from '@/components/home/Hero';
import PhotoBomb from '@/components/home/PhotoBomb';
import PageHeader from '@/components/PageHeader';
import PhotosGrid from '@/components/PhotosGrid';
import TitleAndText from '@/components/TitleAndText';

export type IndexPageProps = {};

export default async function IndexPage(props: IndexPageProps) {
  return (
    <div className="bg-black text-background">
      <PageHeader />
      <TitleAndText />
      <CardsReveal />
      <PhotosGrid />
    </div>
  );
}
