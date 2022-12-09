import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    VersionColumn,
} from 'typeorm';

@Entity()
export class Employer_details {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id!: number;

    @Column()
    company_name!: string;

    @Column()
    company_description!: string;

    @Column()
    company_link!: string;

    @Column()
    company_type!: string;

    @Column()
    job_name!: string;

    @Column()
    job_type!: string;

    @Column()
    job_salary!: string;

    @Column()
    job_base!: string;

    @Column()
    job_description!: string;

    @Column()
    job_tags!: string;

    @CreateDateColumn()
    create?: number;

    @UpdateDateColumn()
    update?: number;

    @VersionColumn()
    version?: number;
}

