import * as config from 'config';
import * as express from 'express';
import * as helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as httpErrors from 'http-errors';
import { routes } from './routes';
import * as mw from './middlewares';
import * as utils from './utils';

const server = () => {
  const app = express();
  app.disable('x-powered-by');
  app.set('config', config);
  app.set('utils', utils);
  app.set('service.errors', httpErrors);

  app.use(helmet());
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use('/', routes());

  app.use(mw.notFound());
  app.use(mw.onError());

  return app;
};

export { server };
