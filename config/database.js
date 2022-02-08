const BDD_HOST = process.env.DATABASE_HOST;
const BDD_PORT = process.env.DATABASE_PORT;
const BDD_NAME = process.env.DATABASE_NAME;
const BDD_USERNAME = process.env.DATABASE_USERNAME;
const BDD_PASSWORD = process.env.DATABASE_PASSWORD;

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: BDD_HOST,
        srv: env.bool('DATABASE_SRV', true),
        port: BDD_PORT,
        database: BDD_NAME,
        username: BDD_USERNAME,
        password: BDD_PASSWORD,
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
