import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MockType, repositoryMockFactory } from '../../test/utils';
import { Repository } from 'typeorm';
import { ActivityEntity } from './activity.entity';
import { ActivityService } from './activity.service';
import { ActivityDTO } from './activity.dto';

describe('ActivityService', () => {
  let service: ActivityService;
  let repositoryMock: MockType<Repository<ActivityEntity>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ActivityService,
        {
          provide: getRepositoryToken(ActivityEntity),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    service = module.get<ActivityService>(ActivityService);
    repositoryMock = module.get(getRepositoryToken(ActivityEntity));
  });

  it('should get all', () => {
    const activities: ActivityDTO[] = [
      {
        name: '123',
        endedAt: new Date(),
        startedAt: new Date(),
      },
    ];
    repositoryMock.find.mockReturnValue(activities);
    expect(service.findAll()).toBe(activities);
  });

  it('should create', () => {
    const activitiy: ActivityEntity = new ActivityEntity();
    repositoryMock.save.mockReturnValue(activitiy);
    const createdActivity = service.create({
      name: '123',
      startedAt: new Date(),
      endedAt: new Date(),
    });
    expect(createdActivity).toBe(activitiy);
  });
});
