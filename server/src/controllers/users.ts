import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { User } from '../models';
import { getToken } from '../utils';

export const getAllUsers = async (_: Request, res: Response): Promise<Response> => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getUserById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({ detail: 'Not found' });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({ detail: 'Not found' });
    }

    await user.destroy();
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getUserInfo = async (req: Request, res: Response): Promise<Response> => {
  try {
    const token = getToken(req);

    if (!token) {
      return res.status(401).send('Unauthorized');
    }

    const { userId } = jwt.decode(token, { json: true }) || {};
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ detail: 'Not found' });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};
