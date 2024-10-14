import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { Cart } from './cart';
import { Order } from './order';
import { Wishlist } from './wishlist';
import { Review } from './review';

export enum UserRole {
    USER = 'user',
    ADMIN = 'admin',
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @Column({ unique: true })
    email: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
    role: UserRole;

    @OneToMany(() => Review, review => review.user)
    reviews: Review[];

    @OneToMany(() => Order, order => order.user)
    orders: Order[];

    @OneToOne(() => Cart, cart => cart.user)
    cart: Cart;

    @OneToOne(() => Wishlist, wishlist => wishlist.user)
    wishlist: Wishlist;

    @Column({ default: true })
    isActive: boolean;
}
