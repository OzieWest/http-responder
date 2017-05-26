import { IRouter, Request, Response } from '@types/express-serve-static-core';

interface IMiddleware {
  (req: Request, res: Response, next: Function): Promise<any> | void;
}

export { IRouter, IMiddleware, Request, Response };
