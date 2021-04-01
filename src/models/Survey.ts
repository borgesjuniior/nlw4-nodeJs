import {
  Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,
} from 'typeorm';

@Entity('surveys')
class Surveys {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: string;

  @CreateDateColumn()
  updated_at: string;
}

export default Surveys;
