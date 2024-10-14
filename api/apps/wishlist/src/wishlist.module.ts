import { Module } from '@nestjs/common';
import { WishlistController } from './wishlist.controller';
import { WishlistService } from './wishlist.service';
import { DatabaseModule } from 'apps/shared/database.module';
import { Wishlist } from 'apps/shared/schemas/wishlist';
import { Product } from 'apps/shared/schemas/product';
import { User } from 'apps/shared/schemas/user';

@Module({
  imports: [DatabaseModule.forRoot([Wishlist, Product, User])],
  controllers: [WishlistController],
  providers: [WishlistService],
})
export class WishlistModule { }
