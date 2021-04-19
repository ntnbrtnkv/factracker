import { registerAs } from '@nestjs/config';

export const commonConfig = registerAs('common', () => ({
  port: process.env.PORT,
  node_env: process.env.NODE_ENV,
}));
