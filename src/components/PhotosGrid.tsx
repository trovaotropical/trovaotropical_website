'use client';

export type PhotosGridProps = {};

export default function PhotosGrid(props: PhotosGridProps) {
  return (
    <div className="py-12 lg:py-16 xl:py-24 px-4 md:px-8 xl:px-12 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {[...Array(12).keys()].map((i) => {
        return (
          <div className="grid gap-2 relative group">
            <div className="aspect-square relative">
              <img
                src={`./static/animation/${i > 10 ? i - 10 : i}.jpg`}
                alt=""
              />
            </div>
            <div className="lg:absolute lg:hidden group-hover:lg:flex flex-col text-center top-0 left-0 w-full h-full bg-black/50 backdrop-blur-lg lg:p-4 items-center justify-center">
              <h3 className="font-display uppercase font-extrabold tracking-widest mb-2">
                Macaúba
              </h3>
              <p className="text-sm">
                É uma semente encontrada em praticamente todo o continente
                americano e usado desde populações tradicionais norte-americanas
                às populações do sul brasileiro.
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
