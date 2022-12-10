import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn} from 'typeorm';

@Entity()
export class Course_homework {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id!: number;

    @Column()
    course_name!: string;

    @Column()
    course_homework_id!: string;

    @CreateDateColumn()
    create?: number;

    @UpdateDateColumn()
    update?: number;

    @VersionColumn()
    version?: number;
}
