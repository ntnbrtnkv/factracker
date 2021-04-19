import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import ORMConfig from '../ormconfig';
import { ActivityModule } from './activity/activity.module';
import { AuthModule } from './auth/auth.module';
import { commonConfig } from './config';
import { APIConfigService } from './config/api-config.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [commonConfig],
      envFilePath: [
        `.env.${process.env.NODE_ENV}.local`,
        '.env.local',
        `.env.${process.env.NODE_ENV}`,
        '.env',
      ],
    }),
    ActivityModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot({
      ...ORMConfig,
      entities: ['dist/**/*.entity.*'],
      cli: undefined,
      migrations: undefined,
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [],
  providers: [APIConfigService],
})
export class AppModule {}
