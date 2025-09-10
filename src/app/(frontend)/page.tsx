import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  ArrowRight,
  ExternalLinkIcon,
  GalleryThumbnails,
  Hexagon,
  Images,
  LinkIcon
} from 'lucide-react';
import ImageGalleryCard from '@/components/ImageGalleryCard';
import { cn } from '@/lib/utils';
import ExternalLinkCard from '@/components/ExternalLinkCard';
import VideoCard from '@/components/VideoCard';
import SocialMediaCard from '@/components/SocialMediaCard';
import BasicPagination from '@/components/pagination1';

export default function Home() {
  return (
    <main className="bg-foreground text-background  min-h-svh">
      <div className="max-w-[100rem] px-1 mx-auto pt-8 flex flex-col lg:flex-row gap-4 justify-center items-center">
        {/* <div className="lg:sticky top-8 rounded-xl  p-6 flex  h-fit "></div> */}
        <div className="w-full md:min-w-2xl max-w-7xl  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          <VideoCard
            title="Seu exemplar te espera na Plataforma9!"
            description="Livro bilíngue: Português brasileiro/inglês estadunidense, 214
                páginas. Dimensões: 216mm x 216mm."
            poster={'./static/insta.jpg'}
            videoUrl="https://cdn.sanity.io/files/qn2l0mij/production/065a6a515266bf7a0d79372e9186443c62e78888.mp4"
          />
          <ExternalLinkCard
            title="Seu exemplar te espera na Plataforma9!"
            description="Livro bilíngue: Português brasileiro/inglês estadunidense, 214
                páginas. Dimensões: 216mm x 216mm."
            imgUrl="./static/livroseeds1.jpg"
            size={2}
          />
          <VideoCard
            title="Seu exemplar te espera na Plataforma9!"
            description="Livro bilíngue: Português brasileiro/inglês estadunidense, 214
                páginas. Dimensões: 216mm x 216mm."
            videoUrl="https://vimeo.com/111593305"
            poster={'./static/insta2.jpg'}
            size={2}
          />
          <ImageGalleryCard
            imgUrl="./static/seed2.jpg"
            title={'Macela-Arbusto'}
            description="É uma semente encontrada em praticamente todo o continente americano e usado desde populações tradicionais norte-americanas às populações do sul brasileiro."
          />
          <VideoCard
            title="Seu exemplar te espera na Plataforma9!"
            description="Livro bilíngue: Português brasileiro/inglês estadunidense, 214
                páginas. Dimensões: 216mm x 216mm."
            videoUrl="https://www.youtube.com/watch?v=CxVXvFOPIyQ"
            size={3}
            poster={'./static/insta3.jpg'}
          />
          <ExternalLinkCard
            title="Seu exemplar te espera na Plataforma9!"
            description="Livro bilíngue: Português brasileiro/inglês estadunidense, 214
                páginas. Dimensões: 216mm x 216mm."
          />
          <ImageGalleryCard
            imgUrl={'./static/insta4.jpg'}
            title={'Copaíba'}
            description="A Copaíba é uma espécie sagrada para os povos tradicionais que
                habitam o Brasil."
            size={1}
          />

          <ImageGalleryCard
            imgUrl="./static/seed3.jpg"
            title={'Macaúba'}
            description="Esta espécie foi adquirida de agricultores que vendiam seus produtos na estrada nos arredores de São Luís no estado do Maranhão."
            size={1}
          />
          <ExternalLinkCard
            title="Seu exemplar te espera na Plataforma9!"
            description="Livro bilíngue: Português brasileiro/inglês estadunidense, 214
                páginas. Dimensões: 216mm x 216mm."
            imgUrl="./static/livroseeds1.jpg"
            size={3}
          />
          <ImageGalleryCard
            imgUrl="./static/seed2.jpg"
            title={'Macela-Arbusto'}
            description="É uma semente encontrada em praticamente todo o continente americano e usado desde populações tradicionais norte-americanas às populações do sul brasileiro."
            size={2}
          />
          <ExternalLinkCard
            title="Seu exemplar te espera na Plataforma9!"
            description="Livro bilíngue: Português brasileiro/inglês estadunidense, 214
                páginas. Dimensões: 216mm x 216mm."
            imgUrl="https://static.wixstatic.com/media/95ef61_d1b141860f354d3c93891c841d816fa3~mv2.jpg"
          />
          <ImageGalleryCard
            imgUrl="https://static.wixstatic.com/media/eedbf4_dfed233857c74ea6976f5be00f35edd1~mv2.jpg/v1/fill/w_1000,h_562,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/eedbf4_dfed233857c74ea6976f5be00f35edd1~mv2.jpg"
            title={'Macaúba'}
            description="Esta espécie foi adquirida de agricultores que vendiam seus produtos na estrada nos arredores de São Luís no estado do Maranhão."
            size={3}
          />
          <BasicPagination />
        </div>
      </div>
    </main>
  );
}
