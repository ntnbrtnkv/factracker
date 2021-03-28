import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActivityDTO } from './activity.dto';
import { ActivityEntity } from './activity.entity';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(ActivityEntity)
    private activityRepository: Repository<ActivityEntity>,
  ) {}

  create(details: ActivityDTO): Promise<ActivityEntity> {
    return this.activityRepository.save(details);
  }

  findAll(): Promise<ActivityEntity[]> {
    return this.activityRepository.find();
  }
}
