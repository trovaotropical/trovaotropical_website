'use client';

export type PhotosGridProps = {};

const data = [
  {
    id: 0,
    title: 'Jatobá do cerrado',
    description:
      'Jatobá, na língua Tupi, significa "árvore com frutos duros". O jatobá do cerrado é encontrado no cerrado e cerradão, que se distinguem pela qualidade de dureza das folhas no bioma do último, uma característica denominada esclerófila.'
  },
  {
    id: 1,
    title: 'Ervilha',
    description:
      'Pisum sativum, mais conhecida como ervilha, é uma espécie de planta herbácea que pertence à família das leguminosas. Originária da região do Mediterrâneo, a ervilha é uma cultura antiga que foi domesticada há mais de 10.000 anos.'
  },
  {
    id: 2,
    title: 'Amendoim Paraguaio Bicolor',
    description:
      'O amendoim é uma semente nativa da América do Sul, seu centro de origem sendo provavelmente a região do Chaco paraguaio. Na língua Tupi, Mãdu’bi significa ‘enterrado’, e diversos nomes populares para essa planta são derivados desse conceito indígena – Minduim, Minduí, Mindubi.'
  },
  {
    id: 3,
    title: 'Castanha de Caju',
    description: `A castanha de caju não é tecnicamente uma noz. Ela é nativa da América do Sul, então a palavra "cashew" vem da palavra brasileira "caju", que vem da palavra indígena tupi "acaju", que significa "noz que se produz".`
  },
  {
    id: 4,
    title: 'Guapuruvu',
    description:
      'O Guapuruvu é uma das árvores de mais rápido crescimento no mundo, atingindo 3 metros por ano e facilmente alcançando 20 metros de altura. Por isso, ela é considerada pioneira em projetos de reflorestamento.'
  },
  {
    id: 5,
    title: 'Tatarena',
    description:
      'A Tatarena é comum no sertão brasileiro. Houve um apagamento do termo sertão que foi “diretamente proporcional à consolidação do termo cerrado”. Essa consolidação do foco no bioma e na botânica, ao invés do foco nas características culturais, ancestrais e identitárias associadas ao bioma, aconteceu quando a demarcação do Planalto Central começou a ser planejada para o desenvolvimento do que se tornaria a capital dos "Estados Unidos do Brasil".'
  },
  {
    id: 6,
    title: 'Buriti',
    description:
      'A Mauritia flexuosa, também conhecida como Buriti, é uma espécie de palmeira da família Arecaceae, nativa da região amazônica. O fruto do Buriti é imensamente relevante para populações tradicionais do sertão por fornecer alimento de alto valor nutricional em períodos de escassez na roça e em áreas consideradas inóspitas.'
  },
  {
    id: 7,
    title: 'Semente sâmara não identificada',
    description:
      'Essa semente é muito distinta para ser identificada com precisão. Como uma semente alada deslizante, ela se dispersa com o vento e incorpora um simbolismo espiritual amplamente utilizado em técnicas de meditação.'
  },
  {
    id: 8,
    title: 'Abobrinha',
    description:
      'Investigações arqueológicas encontraram evidências de que a cucurbita foi domesticada nas Américas há pelo menos 10.000 anos, tornando-a uma das espécies domesticadas mais antigas. Sementes dessa planta foram encontradas em excrementos fossilizados de mamutes de milhares de anos atrás, indicando que o seu consumo por “herbívoros gigantes” fazia parte de sua tecnologia de dispersão e estratégia de sobrevivência.'
  },
  {
    id: 9,
    title: 'Feijão de corda pintadinho',
    description:
      'O feijão de corda, ou feijão-fradinho, é uma planta leguminosa anual com alta tolerância a solos áridos e degradados. Graças a essa habilidade, ele prosperou nos sertões semi-áridos Nordestinos. O gênero Vigna possui uma vasta diversidade de cores e formatos, características que nomeiam a variedade do cultivar. Por isso seu título varia de região para região.'
  },
  {
    id: 10,
    title: 'Milho crioulo lobão',
    description:
      'O milho crioulo alaranjado lembra a pelagem do lobo guará, nativo do cerrado brasileiro. Esta variedade foi adquirida da fazenda Recanto do São Francisco, no estado de Minas Gerais. Os cultivares dessa fazenda foram passados de mão em mão, de comunidades indígenas ao fazendeiro e pesquisador Ernst Götsch, até se consolidarem como variedades de características próprias do sul mineiro.'
  },
  {
    id: 11,
    title: "Sangra d'água",
    description:
      "O Croton urucurana também é conhecido como sangra d'água, por conta de seu látex ser vermelho como sangue, e dele ser normalmente encontrado em terrenos úmidos e brejos. O látex avermelhado de seu tronco tem propriedades medicinais cicatrizantes e antifúngicas, capaz de estancar o sangue de feridas."
  }
];

export default function PhotosGrid(props: PhotosGridProps) {
  return (
    <div className="py-12 lg:py-16 xl:py-24 px-4 md:px-8 xl:px-12 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {data.map((item) => {
        return (
          <div
            key={'photogrid_' + item.id}
            className="grid gap-2 relative group"
          >
            <div className="aspect-square relative">
              <img src={`./static/animation/${item.id}.jpg`} alt="" />
            </div>
            <div className="lg:absolute lg:opacity-0 group-hover:opacity-100 duration-300 lg:flex flex-col top-0 left-0 w-full h-full bg-black/70 backdrop-blur-xs lg:p-4 items-center text-center justify-center">
              <h3 className="font-display uppercase font-extrabold tracking-widest mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-pretty">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
