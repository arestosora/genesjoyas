import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { DatabaseModule } from 'apps/shared/database.module';
import { Payment } from 'apps/shared/schemas/payment';
import { Order } from 'apps/shared/schemas/order';

@Module({
  imports: [DatabaseModule.forRoot([Payment, Order])],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule { }
