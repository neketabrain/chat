import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { JWT_SECRET_KEY } from '../constants';
import { User } from '../models';

export const registerUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { username, password, firstname, lastname } = req.body;

    const errors: Record<string, string> = {};

    if (!username?.trim()) {
      errors.username = 'Username is required';
    }
    if (!password?.trim()) {
      errors.password = 'Password is required';
    }
    if (password?.trim().length < 8) {
      errors.password = 'Your password must be at least 8 characters';
    }
    if (!firstname?.trim()) {
      errors.firstname = 'Firstname is required';
    }
    if (!lastname?.trim()) {
      errors.lastname = 'Lastname is required';
    }

    if (Object.keys(errors).length) {
      return res.status(400).json(errors);
    }

    const candidate = await User.findOne({ where: { username } });
    if (candidate) {
      return res.status(400).json({ username: 'This username is already being used' });
    }

    const encryptedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({ username, firstname, lastname, password: encryptedPassword });
    const token = jwt.sign({ userId: user.get('id'), username }, JWT_SECRET_KEY, {
      expiresIn: '6h',
    });

    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const loginUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { username, password } = req.body;

    const errors: Record<string, string> = {};

    if (!username?.trim()) {
      errors.username = 'Username is required';
    }
    if (!password?.trim()) {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length) {
      return res.status(400).json(errors);
    }

    const user = await User.findOne({ where: { username } });
    if (user && (await bcrypt.compare(password, user.get('password')))) {
      const token = jwt.sign({ userId: user.get('id'), username }, JWT_SECRET_KEY, {
        expiresIn: '6h',
      });

      return res.status(200).json({ token });
    }

    return res.status(400).json({ error: 'Invalid credentials' });
  } catch (error) {
    return res.status(500).json(error);
  }
};
