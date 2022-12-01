import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn} from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    username!: string | undefined;

    @Column()
    user_email!: string | undefined;

    @Column()
    user_course_passport!: string| undefined;

    @Column()
    course_user!: boolean| undefined;

    @Column()
    description!: string| undefined;

    @Column()
    country!: string| undefined;

    @Column()
    roles!: string| undefined;

    @Column()
    experience!: string| undefined;

    @Column()
    achievements!: string| undefined;

    @Column()
    twitter!: string| undefined;

    @Column()
    github!: string| undefined;

    @Column()
    telegram!: string| undefined;

    @Column()
    privacy!: boolean| undefined;

    @CreateDateColumn()
    create?: number;

    @UpdateDateColumn()
    update?: number;

    @VersionColumn()
    version?: number;
}
