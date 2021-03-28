import { Repository } from 'typeorm';

export type MockType<T> = {
  [P in keyof T]?: jest.Mock<unknown>;
};

export const repositoryMockFactory: () => MockType<
  Repository<unknown>
> = jest.fn(() => ({
  find: jest.fn((entity) => entity),
  save: jest.fn((entity) => entity),
}));
