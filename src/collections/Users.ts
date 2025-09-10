import type { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
  slug: 'users',
  labels: { plural: 'Administradores', singular: 'Administrador' },
  admin: {
    useAsTitle: 'email'
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ]
};
