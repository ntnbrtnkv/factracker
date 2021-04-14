import * as dotenv from 'dotenv-flow';
import { ConnectionOptions } from 'typeorm';
dotenv.config();

export default {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: ['src/**/*.entity.*'],
  autoLoadEntities: true,
  synchronize: false,
  migrations: ['migrations/*.ts'],
  cli: {
    migrationsDir: 'migrations',
  },
} as ConnectionOptions;
