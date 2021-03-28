import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { ActivityEntity } from './activity.entity';
import { ActivityService } from './activity.service';

@Resolver(() => ActivityEntity)
export class ActivityResolver {
  constructor(
    @Inject(ActivityService) private activityService: ActivityService,
  ) {}

  @Query(() => [ActivityEntity])
  async activity(): Promise<ActivityEntity[]> {
    return await this.activityService.findAll();
  }

  @Mutation(() => ActivityEntity)
  async createActivity(
    @Args('name') name: string,
    @Args('startedAt') startedAt: Date,
    @Args('endedAt') endedAt: Date,
  ) {
    return await this.activityService.create({
      name,
      startedAt,
      endedAt,
    });
  }
}
