import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';
import { Order } from './order';

@Entity()
export class Coupon {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    code: string;

    @Column('decimal', { precision: 5, scale: 2 })
    discountPercentage: number;

    @CreateDateColumn()
    validFrom: Date;

    @Column({ type: 'timestamp' })
    validUntil: Date;

    @OneToMany(() => Order, order => order.coupon)
    orders: Order[];
}
