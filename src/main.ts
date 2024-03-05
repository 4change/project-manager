import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { Log4jsLogger } from '@nestx-log4js/core';

const listenPort = 3000
const logger = new Logger("main.ts")

const bootstrap = async() => {
  const app = await NestFactory.create(AppModule);

  // 配置 Swagger
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // 使用 Log4jsLogger 日志模块
  app.useLogger(app.get(Log4jsLogger))

  await app.listen(listenPort);
}

bootstrap().then(() => {
  logger.log(`listen in http://localhost:${listenPort}`);
});
