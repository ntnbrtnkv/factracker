import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('activity')
export class ActivityEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column('varchar', { length: 256 })
  name: string;

  @Field()
  @Column('timestamptz')
  startedAt: Date;

  @Field()
  @Column('timestamptz')
  endedAt: Date;
}
