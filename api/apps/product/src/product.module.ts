import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { DatabaseModule } from 'apps/shared/database.module';
import { Product } from 'apps/shared/schemas/product';
import { Category } from 'apps/shared/schemas/category';
import { Review } from 'apps/shared/schemas/review';

@Module({
  imports: [DatabaseModule.forRoot([Product, Category, Review])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule { }
