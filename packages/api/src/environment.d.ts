declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      PASSWORD_SALT: string;
      NODE_ENV: 'development' | 'production';
      PORT: string;
    }
  }
}

export {};
