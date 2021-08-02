import { Request } from 'express';

export const getToken = (req: Request): string | null => {
  let token = req.headers.authorization;

  if (!token) {
    return null;
  }

  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }

  return token;
};
