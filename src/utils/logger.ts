import * as config from 'config';
import * as log4js from 'log4js';

const level = config.get<string>('logs.level').toUpperCase();
const prefix = config.get<string>('prefix').toUpperCase();

log4js.configure({
  appenders: [{
    type: 'console',
    layout: { type: 'basic' },
  }],
  replaceConsole: true,
});

const logger = log4js.getLogger(prefix);
logger.setLevel(level);

export { logger };
