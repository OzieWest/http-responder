import * as _ from 'lodash';
import { Request, Response, IRouter } from '../../types';

const respondRouter = (router: IRouter): IRouter => {
  router.all('*', (req: Request, res: Response) => {
    const timeout = _.toNumber(req.headers['x-timeout'] || 0);
    const code = _.toNumber(req.headers['x-http-code'] || 200);

    setTimeout(() => {
      res.status(code).json({
        url: req.originalUrl,
        headers: req.headers,
        query: req.query,
        cookies: req.cookies,
        body: req.body,
      });
    }, timeout);
  });
  return router;
};

export { respondRouter };
