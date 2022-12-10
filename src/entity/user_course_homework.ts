import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn} from 'typeorm';

@Entity()
export class Course_details {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id!: number;

    @Column()
    user_email!: string;

    @Column()
    course_name!: string;

    @Column()
    course_homework_1_result!: string;

    @Column()
    course_homework_2_result!: string;

    @Column()
    course_homework_3_result!: string;

    @Column()
    course_homework_4_result!: string;

    @Column()
    course_homework_5_result!: string;

    @Column()
    course_homework_6_result!: string;

    @Column()
    course_homework_7_result!: string;

    @CreateDateColumn()
    create?: number;

    @UpdateDateColumn()
    update?: number;

    @VersionColumn()
    version?: number;
}
