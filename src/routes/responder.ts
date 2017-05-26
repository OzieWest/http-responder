import * as _ from 'lodash';
import { Request, Response, IRouter } from '../../types';

const respondRouter = (router: IRouter): IRouter => {
  router.all('*', (req: Request, res: Response) => {
    const code = _.toNumber(req.headers['x-http-code'] || 200);
    res.status(code).json({
      url: req.originalUrl,
      headers: req.headers,
      query: req.query,
      cookies: req.cookies,
      body: req.body,
    });
  });
  return router;
};

export { respondRouter };
