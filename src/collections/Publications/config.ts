import type { CollectionConfig } from 'payload';

export const Publications: CollectionConfig = {
  slug: 'publications',
  labels: {
    singular: 'Publicação',
    plural: 'Publicações'
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'contentType', 'slug', 'updatedAt']
  },
  fields: [
    {
      name: 'title',
      label: 'Título',
      type: 'text',
      required: true
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      unique: true
    },
    {
      name: 'description',
      label: 'Descrição',
      type: 'richText',
      required: true
    },
    {
      name: 'contentType',
      label: 'Tipo de publicação',
      type: 'radio',
      required: true,
      options: [
        { label: 'Artigo Longo', value: 'article-long' },
        { label: 'Artigo Curto', value: 'article-short' },
        { label: 'Vídeo', value: 'video' },
        { label: 'Galeria de Fotos', value: 'photo-gallery' },
        { label: 'Referência', value: 'reference' }
      ]
    },
    {
      name: 'cover',
      label: 'Imagem de capa',
      type: 'upload',
      relationTo: 'media',
      required: false, // só obrigatório para alguns casos, então validamos abaixo
      admin: {
        condition: (_, siblingData) =>
          siblingData.contentType !== 'photo-gallery'
      }
    },
    {
      name: 'video',
      label: 'Vídeo em destaque',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        condition: (_, siblingData) => siblingData.contentType === 'video'
      },
      validate: (val: any, { siblingData }: any) => {
        if (siblingData.contentType === 'video' && !val) {
          return 'Vídeo em destaque é obrigatório para publicações do tipo vídeo.';
        }
        return true;
      }
    },
    {
      name: 'gallery',
      label: 'Galeria de imagens',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      required: false,
      admin: {
        condition: (_, siblingData) =>
          siblingData.contentType === 'photo-gallery'
      },
      validate: (val, { siblingData }: any) => {
        if (
          siblingData.contentType === 'photo-gallery' &&
          (!val || val.length === 0)
        ) {
          return 'Galeria é obrigatória para publicações do tipo galeria de fotos.';
        }
        return true;
      }
    },
    {
      name: 'externalLink',
      label: 'Link externo',
      type: 'text',
      required: false,
      admin: {
        condition: (_, siblingData) => siblingData.contentType === 'reference'
      },
      validate: (val: any, { siblingData }: any) => {
        if (siblingData.contentType === 'reference' && !val) {
          return 'Link externo é obrigatório para publicações do tipo referência.';
        }
        return true;
      }
    },
    {
      name: 'content',
      label: 'Conteúdo',
      type: 'richText',
      required: false,
      admin: {
        condition: (_, siblingData) =>
          siblingData.contentType === 'article-long'
      },
      validate: (val, { siblingData }) => {
        if (siblingData.contentType === 'article-long' && !val) {
          return 'Conteúdo é obrigatório para artigos longos.';
        }
        return true;
      }
    }
  ]
};
