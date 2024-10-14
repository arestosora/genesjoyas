import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Category } from './category';
import { Review } from './review';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('decimal', { precision: 10, scale: 2 })
    price: number;

    @Column()
    description: string;

    @Column()
    sku: string;

    @Column()
    stock: number;

    @ManyToOne(() => Category, category => category.products)
    category: Category;

    @OneToMany(() => Review, review => review.product)
    reviews: Review[];
}
