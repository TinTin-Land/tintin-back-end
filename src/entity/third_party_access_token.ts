import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    VersionColumn,
} from 'typeorm';

@Entity()
export class Third_party_access_token {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id!: number;

    @Column()
    app_name!: string;

    @Column()
    wj_access_token!: string;

    @CreateDateColumn()
    create?: number;

    @UpdateDateColumn()
    update?: number;

    @VersionColumn()
    version?: number;
}

