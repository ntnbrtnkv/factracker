import { registerAs } from '@nestjs/config';

export const commonConfig = registerAs('common', () => ({
  node_env: process.env.NODE_ENV,
}));
