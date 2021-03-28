import './src/config/env';

import { DB } from './src/config';

console.log(DB.DATABASE_URL);

export default {
  type: 'postgres',
  url: DB.DATABASE_URL,
  entities: ['src/**/*.entity.*'],
  autoLoadEntities: true,
  synchronize: false,
  migrations: ['migrations/*.ts'],
  cli: {
    migrationsDir: 'migrations',
  },
};
