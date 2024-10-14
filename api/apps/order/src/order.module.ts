import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { DatabaseModule } from 'apps/shared/database.module';
import { Order } from 'apps/shared/schemas/order';
import { Coupon } from 'apps/shared/schemas/coupon';
import { User } from 'apps/shared/schemas/user';
import { Payment } from 'apps/shared/schemas/payment';

@Module({
  imports: [DatabaseModule.forRoot([Order, Coupon, User, Payment])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule { }
