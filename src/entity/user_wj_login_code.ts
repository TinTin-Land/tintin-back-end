import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    VersionColumn,
} from 'typeorm';

@Entity()
export class User_wj_login_code {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id!: number;

    @Column()
    user_email!: string;

    @Column()
    login_code!: string;

    @CreateDateColumn()
    create?: number;

    @UpdateDateColumn()
    update?: number;

    @VersionColumn()
    version?: number;
}

