import path from 'path';
import { buildConfig } from 'payload';

// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

import { fileURLToPath } from 'url';
import sharp from 'sharp';
import { Users } from './collections/Users';
import { Media } from './collections/Media';
import { Publications } from './collections/Publications/config';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname)
    },
    timezones: { defaultTimezone: 'America/Sao_Paulo' },
    // livePreview: {
    //   url: 'http://localhost:3000',
    //   globals: ['home'],
    //   breakpoints: [
    //     {
    //       name: 'mobile',
    //       height: 667,
    //       label: 'Mobile',
    //       width: 375
    //     }
    //   ]
    // },
    autoLogin:
      process.env.NODE_ENV === 'development'
        ? {
            email: 'viniciusofp@gmail.com',
            password: 'digiteumasenhasegura',
            prefillOnly: true
          }
        : false
  },
  globals: [],
  collections: [Publications, Media, Users],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts')
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || ''
    }
  }),
  sharp,
  plugins: []
});
