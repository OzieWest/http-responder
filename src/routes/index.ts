import { Router } from 'express';
import { managementRouter } from './management';
import { IRouter } from '../../types';

const routes = () => {
  const router: IRouter = Router();
  router.use('/management', managementRouter(Router()));
  return router;
};

export { routes };
