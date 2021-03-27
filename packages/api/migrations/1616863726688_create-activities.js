/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable('activity', {
    id: 'id',
    name: { type: 'varchar(256)' },
    startedAt: {
      type: 'timestamp',
      notNull: true,
    },
    endedAt: {
      type: 'timestamp',
      notNull: true,
    },
  });
};

exports.down = pgm => {
  pgm.dropTable('activity')
};
