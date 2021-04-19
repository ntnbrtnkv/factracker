import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { APIConfigService } from './config/api-config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(APIConfigService);

  if (!configService.isProduction()) {
    const config = new DocumentBuilder()
      .setTitle('FacTrack API')
      .setVersion(process.env.npm_package_version)
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
  }
  await app.listen(3000);
}
bootstrap();
