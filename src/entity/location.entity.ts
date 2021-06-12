import { ApiProperty } from '@nestjs/swagger';
import { IsAlpha, IsNumber, IsUrl, MaxLength } from 'class-validator';
import {
  BaseEntity,
  BeforeUpdate,
  Column,
  Entity,
  IsNull,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'locations' })
export class LocationEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ required: true })
  @IsAlpha()
  @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
  @MaxLength(255)
  name: string;

  @ApiProperty({ required: true })
  @IsNumber()
  @Column({ type: 'varchar', length: 255, nullable: false })
  @MaxLength(255)
  phoneNumber: string;

  @ApiProperty({ required: true })
  @IsAlpha()
  @Column({ type: 'varchar', length: 255, nullable: false })
  @MaxLength(255)
  contactPerson: string;

  @ApiProperty({ required: false })
  @IsUrl()
  @Column({ type: 'varchar', length: 255, nullable: true })
  @MaxLength(255)
  website: string;

  @ApiProperty({ required: true })
  @Column({ type: 'text', nullable: false })
  description: string;

  @ApiProperty({ required: true })
  @Column({ type: 'simple-array', nullable: false })
  coordinates: JSON[];

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
