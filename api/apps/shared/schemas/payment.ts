import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn } from 'typeorm';
import { Order } from './order';

@Entity()
export class Payment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    paymentMethod: string;

    @Column('decimal', { precision: 10, scale: 2 })
    amount: number;

    @CreateDateColumn()
    paymentDate: Date;

    @Column({ default: 'Pending' })
    status: string;

    @OneToMany(() => Order, order => order.payment)
    orders: Order[];
}