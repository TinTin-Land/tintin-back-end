import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transaction {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    chain_id!: string;

    @Column()
    send_address!: string;

    @Column()
    tx_hash!: string;

    @Column()
    coin_amount!: string;
}
