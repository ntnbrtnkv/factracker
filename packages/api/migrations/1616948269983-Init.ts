import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Init1616948269983 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log(process.env.DATABASE_URL);
    await queryRunner.createTable(
      new Table({
        name: 'activity',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            default: 'gen_random_uuid()',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '256',
          },
          {
            name: 'startedAt',
            type: 'timestamptz',
          },
          {
            name: 'endedAt',
            type: 'timestamptz',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('activity');
  }
}
