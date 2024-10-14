import { Entity, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { CartItem } from './cartItem';
import { User } from './user';

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => CartItem, cartItem => cartItem.cart)
    items: CartItem[];

    @OneToOne(() => User, user => user.cart)
    @JoinColumn()
    user: User;
}
