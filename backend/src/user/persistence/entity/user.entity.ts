import { User } from 'src/user/domain/model/user.model';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity implements User {
  @Column('varchar', { length: 255, nullable: true })
  firstName: string;
  @Column('varchar', { length: 255, nullable: true })
  lastName: string;
  @Column('varchar', { length: 255, nullable: false, unique: true })
  email: string;
  @Column('varchar', { length: 255, nullable: false })
  hash: string;

  @PrimaryGeneratedColumn('uuid')
  id?: string;
  @Column('date', { default: new Date() })
  createdAt?: string;
  @Column('date', { default: new Date() })
  modifiedAt?: string;
}
