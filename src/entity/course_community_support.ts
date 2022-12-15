import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn} from 'typeorm';

@Entity()
export class Course_community_support {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id!: number;

    @Column()
    course_community_support_name!: string;

    @Column()
    course_community_support_info!: string;

    @CreateDateColumn()
    create?: number;

    @UpdateDateColumn()
    update?: number;

    @VersionColumn()
    version?: number;
}
