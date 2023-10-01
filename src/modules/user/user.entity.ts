import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  login: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'int' })
  role: number;

  @Column({ type: 'boolean', default: false })
  isOnline: boolean;

  @Column({ type: 'text', nullable: true })
  socketId: string;
}
