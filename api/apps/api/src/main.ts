import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const log = new Logger();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true
    })
  )
  
  await app.listen(process.env.PORT || 3000);

  await app.startAllMicroservices();

  log.log(`Server is running on port ${process.env.PORT || 3000}`)

}
bootstrap();
