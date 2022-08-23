module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      socketPath: `/cloudsql/${env('INSTANCE_CONNECTION_NAME')}`,
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USER'),
      password: env('DATABASE_PASSWORD'),
    },
  },
});
