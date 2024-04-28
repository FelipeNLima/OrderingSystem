import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import swaggerInit from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  };
  app.enableCors(options);

  // Swagger
  await swaggerInit(app);
  await app.listen(3000);
}
bootstrap();
