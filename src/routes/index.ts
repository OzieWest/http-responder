import { Router } from 'express';
import { managementRouter } from './management';
import { IRouter } from '../../types';
import { respondRouter } from './responder';

const routes = () => {
  const router: IRouter = Router();
  router.use('/management', managementRouter(Router()));
  router.use('/', respondRouter(Router()));
  return router;
};

export { routes };
