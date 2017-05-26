const env = process.env;
const ENV = env.NODE_ENV || 'development';

module.exports = {
  port: env.NODE_PORT || 3000,
  env: ENV,
  dev: ENV === 'development',
  qa: ENV === 'qa',
  prod: ENV === 'prod',
  test: ENV === 'test',
  prefix: 'responder',
  startTime: new Date(),
  logs: {
    level: (env.LOG_LEVEL || '').toUpperCase() || 'DEBUG',
  },
};
