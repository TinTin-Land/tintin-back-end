import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn} from 'typeorm';

@Entity()
export class Course_homework {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id!: number;

    @Column()
    course_name!: string;

    @Column()
    course_homework_1_id!: string;

    @Column()
    course_homework_2_id!: string;

    @Column()
    course_homework_3_id!: string;

    @Column()
    course_homework_4_id!: string;

    @Column()
    course_homework_5_id!: string;

    @Column()
    course_homework_6_id!: string;

    @Column()
    course_homework_7_id!: string;

    @CreateDateColumn()
    create?: number;

    @UpdateDateColumn()
    update?: number;

    @VersionColumn()
    version?: number;
}
