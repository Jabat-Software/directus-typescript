import { ItemsService } from '@directus/api/services/items';
import { User } from '@directus/types';
import { respond } from '@directus/api/middleware/respond';
import asyncHandler from '@directus/api/utils/async-handler';
import { NextFunction, Request, Response, Router } from 'express';
import { RegisterEndpointFunctions } from '../../types/directus.js';

export default (router: Router, context: RegisterEndpointFunctions) => {
  router.get(
    '/',
    asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
      const userServices = new ItemsService<User>('directus_users', { schema: req.schema, knex: context.database });
      const user = await userServices.readByQuery({ limit: 10 });
      res.locals['payload'] = { data: user };
      return next();
    }),
    respond,
  );
};
