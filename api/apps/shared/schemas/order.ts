import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from './user';
import { Payment } from './payment';
import { Coupon } from './coupon';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.orders)
    user: User;

    @ManyToOne(() => Payment, payment => payment.orders)
    payment: Payment;

    @Column('decimal', { precision: 10, scale: 2 })
    total: number;

    @CreateDateColumn()
    orderDate: Date;

    @Column({ default: 'Pending' })
    status: string;

    @ManyToOne(() => Coupon, coupon => coupon.orders, { nullable: true })
    coupon: Coupon;
}