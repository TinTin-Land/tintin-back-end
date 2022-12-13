import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn} from 'typeorm';

@Entity()
export class Course_survey_result {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id!: number;

    @Column()
    survey_id!: string;

    @Column()
    survey_result!: string;

    @CreateDateColumn()
    create?: number;

    @UpdateDateColumn()
    update?: number;

    @VersionColumn()
    version?: number;
}
