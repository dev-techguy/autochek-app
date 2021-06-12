import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Autocheck Location Rest API')
    .setDescription(
      'The aim of this api is to store different locations then use the location coordinates to get the distance between the locations.',
    )
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}

bootstrap();
