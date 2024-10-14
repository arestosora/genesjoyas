import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Product } from './product';
import { User } from './user';

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.reviews)
    user: User;

    @ManyToOne(() => Product, product => product.reviews)
    product: Product;

    @Column('text')
    content: string;

    @Column('int')
    rating: number;  // De 1 a 5 estrellas

    @CreateDateColumn()
    createdDate: Date;
}