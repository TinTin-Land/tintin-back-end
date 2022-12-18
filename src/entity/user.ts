import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    VersionColumn,
} from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id!: number;


    @Column()
    unique_username!: string;

    @Column()
    username!: string;

    @Column()
    user_email!: string;

    @Column()
    user_course_passport!: string;

    @Column()
    course_user!: boolean;

    @Column()
    description!: string;

    @Column()
    country!: string;

    @Column()
    roles!: string;

    @Column()
    experience!: string;

    @Column()
    achievements!: string;

    @Column()
    twitter!: string;

    @Column()
    github!: string;

    @Column()
    telegram!: string;

    @Column()
    privacy!: boolean;

    @CreateDateColumn()
    create?: number;

    @UpdateDateColumn()
    update?: number;

    @VersionColumn()
    version?: number;
}

