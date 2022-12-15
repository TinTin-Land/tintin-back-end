import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn} from 'typeorm';

@Entity()
export class Course_provider {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id!: number;

    @Column()
    course_provider_name!: string;

    @Column()
    course_provider_info!: string;

    @CreateDateColumn()
    create?: number;

    @UpdateDateColumn()
    update?: number;

    @VersionColumn()
    version?: number;
}
