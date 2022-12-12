import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    VersionColumn,
} from 'typeorm';

@Entity()
export class Third_party_user {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id!: number;

    @Column()
    user_email!: string;

    @Column()
    teachable_user_email!: string;

    @Column()
    wj_open_id!: string;

    @CreateDateColumn()
    create?: number;

    @UpdateDateColumn()
    update?: number;

    @VersionColumn()
    version?: number;
}

