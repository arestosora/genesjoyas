import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinTable, ManyToMany } from 'typeorm';
import { Product } from './product';
import { User } from './user';

@Entity()
export class Wishlist {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.wishlist)
    user: User;

    @ManyToMany(() => Product)
    @JoinTable()
    products: Product[];
}