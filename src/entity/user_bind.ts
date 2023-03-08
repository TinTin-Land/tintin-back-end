import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    VersionColumn,
} from 'typeorm';

@Entity()
export class User_bind {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id!: number;

    @Column()
    user_email!: string;

    @Column()
    evm_address!: string;

    @CreateDateColumn()
    create?: number;

    @UpdateDateColumn()
    update?: number;

    @VersionColumn()
    version?: number;
}

