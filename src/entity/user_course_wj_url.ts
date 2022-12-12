import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    VersionColumn,
} from 'typeorm';

@Entity()
export class User_course_wj_url {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id!: number;

    @Column()
    user_email!:string

    @Column()
    course_name!: string;

    @Column()
    user_course_wj_url_list!: string;

    @CreateDateColumn()
    create?: number;

    @UpdateDateColumn()
    update?: number;

    @VersionColumn()
    version?: number;
}

