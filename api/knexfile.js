// Update with your config settings.

module.exports = {

  test: {
    client: 'pg',
    connection: {
      user: process.env.PGUSER,
      host: process.env.PGHOST,
      database: process.env.PGDB,
      password: process.env.PGPASSWORD,
      port: process.env.PGPORT,
    },
    migrations: {
      directory: __dirname + '/app/db/migrations'
    },
    seeds: {
      directory: __dirname + '/app/db/seeds'
    }
  },
  development: {
    client: 'pg',
    connection: {
      user: process.env.PGUSER,
      host: process.env.PGHOST,
      database: process.env.PGDB,
      password: process.env.PGPASSWORD,
      port: process.env.PGPORT,
    },
    migrations: {
      directory: __dirname + '/app/db/migrations'
    },
    seeds: {
      directory: __dirname + '/app/db/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/app/db/migrations'
    },
    seeds: {
      directory: __dirname + '/app/db/seeds'
    }
  }
};
