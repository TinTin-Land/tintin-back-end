import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn} from 'typeorm';

@Entity()
export class Hackathons_details {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id!: number;

    @Column()
    hackathons_description!: string;

    @Column()
    hackathons_date!: string;

    @Column()
    hackathons_title!: string;

    @Column()
    hackathons_links!: string;

    @Column()
    hackathons_questions!: string;

    @CreateDateColumn()
    create?: number;

    @UpdateDateColumn()
    update?: number;

    @VersionColumn()
    version?: number;
}
