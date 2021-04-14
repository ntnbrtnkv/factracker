import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivityModule } from './activity/activity.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

import ORMConfig from '../ormconfig';

@Module({
  imports: [
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
