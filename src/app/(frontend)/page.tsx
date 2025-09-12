import Hero from '@/components/home/Hero';

export type IndexPageProps = {};

export default async function IndexPage(props: IndexPageProps) {
  return (
    <div>
      <Hero />
    </div>
  );
}
