import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { DatabaseModule } from 'apps/shared/database.module';
import { Cart } from 'apps/shared/schemas/cart';
import { CartItem } from 'apps/shared/schemas/cartItem';
import { User } from 'apps/shared/schemas/user';

@Module({
  imports: [DatabaseModule.forRoot([Cart, CartItem, User])],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule { }
