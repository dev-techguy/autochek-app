import { MaxLength } from 'class-validator';
import {
  BaseEntity,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'locations' })
export class LocationEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
  @MaxLength(255)
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  @MaxLength(255)
  phoneNumber: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  @MaxLength(255)
  contactPerson: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  @MaxLength(255)
  website: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @Column({ type: 'jsonb', nullable: false })
  coordinates: JSON;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
  })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
  })
  updatedAt: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updatedAt = new Date();
  }
}
