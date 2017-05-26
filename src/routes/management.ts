import { Request, Response, IRouter } from '../../types';

const managementRouter = (router: IRouter): IRouter => {
  router.get('/health', (req: Request, res: Response) => {
    const config = req.app.get('config');
    res.json({
      started_at: config.startTime,
      uptime: (new Date() as any) - config.startTime,
    });
  });
  return router;
};

export { managementRouter };
