import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn} from 'typeorm';

@Entity()
export class Course_details {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id!: number;

    @Column()
    course_name!: string;

    @Column()
    course_cycle!: string;

    @Column()
    course_link!: string;

    @Column()
    course_state!: string;

    @Column()
    course_registration_start_date!: string;

    @Column()
    course_registration_deadline!: string;

    @Column()
    course_image!: string;

    @Column()
    course_description!: string;

    @Column()
    course_content_data!: string;

    @Column()
    course_tab!: string;

    @Column()
    course_advantages!: string;

    @Column()
    course_teacher_info!: string;

    @Column()
    course_provider!: string;

    @Column()
    course_student_profile_feedback!: string;

    @Column()
    course_target_user_group!: string;

    @Column()
    course_community_support!: string;

    @CreateDateColumn()
    create?: number;

    @UpdateDateColumn()
    update?: number;

    @VersionColumn()
    version?: number;
}
