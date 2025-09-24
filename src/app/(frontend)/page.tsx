import CardsReveal from '@/components/CardsReveal';
import Hero from '@/components/home/Hero';

export type IndexPageProps = {};

export default async function IndexPage(props: IndexPageProps) {
  return (
    <div>
      <div className="h-svh border w-full bg-gradient-to-b from-neutral-100 to-neutral-200"></div>
      <CardsReveal />
      <div className="h-svh border w-full bg-gradient-to-b from-neutral-100 to-neutral-200"></div>
    </div>
  );
}
