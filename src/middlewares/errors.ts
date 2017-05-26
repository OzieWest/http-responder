import { logger } from '../utils';
import { IMiddleware, Request, Response } from '../../types';

const notFound = (): IMiddleware =>
  (req: Request, res: Response, next: Function) => {
    const httpErrors = req.app.get('service.errors');
    next(new httpErrors.NotFound());
  };

const onError = () =>
  (err, req: Request, res: Response, next: Function) => {
    const utils = req.app.get('utils');

    err.url = req.url;
    err.status = err.status || 500;

    const trackId = utils.getHash(err);
    const result = {
      error: {
        message: err.message,
        type: err.event || err.name || 'Unexpected Error',
        track_id: trackId,
      },
    };
    res.status(err.status);
    res.json(result);

    err.trackId = trackId;
    logger.error(err.status, req.url, utils.stringify(err));
  };

export { notFound, onError };
