import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    VersionColumn,
    UpdateDateColumn,
    Repository, EntityRepository
} from 'typeorm';

@Entity()
export class UserEmail {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id!: number;

    @Column()
    email!: string;

    @Column()
    code!: string;

    @CreateDateColumn()
    create?: number;

    @UpdateDateColumn()
    update?: number;

    @VersionColumn()
    version?: number;


}

@EntityRepository(UserEmail)
export class UserEmailRepository extends Repository<UserEmail> {

    public findByEmailAndCode(email: string,code:string): Promise<UserEmail | undefined> {
        return this.createQueryBuilder('user_email')
            .where('email = :email',{ email })
            .andWhere('code = :code',{ code })
            .getOne();
    }
}


