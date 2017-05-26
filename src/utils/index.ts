import * as crypto from 'crypto';
import { logger } from './logger';

const stringify = (data: any) => {
  if (data instanceof Error) {
    return JSON.stringify(data, Object.getOwnPropertyNames(data));
  }
  return JSON.stringify(data);
};

const getHash = (data: any, salt?) => {
  const str = typeof data === 'string' ? data : stringify(data);
  return crypto.createHash('md5').update(str, salt).digest('hex');
};

export { logger, stringify, getHash };
