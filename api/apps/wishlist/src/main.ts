import { NestFactory } from '@nestjs/core';
import { WishlistModule } from './wishlist.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    WishlistModule,
    {
      transport: Transport.TCP,
    }
  );
  await app.listen();
}
bootstrap();
