import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { JWT_SECRET_KEY } from '../constants';
import { getToken } from '../utils';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const token = getToken(req);

  if (!token) {
    return res.status(403).send('Unauthorized');
  }

  try {
    jwt.verify(token, JWT_SECRET_KEY);
  } catch {
    return res.status(403).send('Unauthorized');
  }

  return next();
};
