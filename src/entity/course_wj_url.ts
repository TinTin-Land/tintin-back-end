import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    VersionColumn,
} from 'typeorm';

@Entity()
export class Course_wj_url {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id!: number;

    @Column()
    course_name!: string;

    @Column()
    course_wj_url_list!: string;

    @CreateDateColumn()
    create?: number;

    @UpdateDateColumn()
    update?: number;

    @VersionColumn()
    version?: number;
}

