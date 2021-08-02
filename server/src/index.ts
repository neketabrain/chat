/* eslint-disable no-console */

import dotenv from 'dotenv';
import express from 'express';

import { db } from './config';
import { getAllUsers, getUserById, registerUser, loginUser, deleteUser, getUserInfo } from './controllers';
import { authMiddleware } from './middlewares';

dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/auth/register', registerUser);
app.post('/auth/login', loginUser);

app.get('/users', authMiddleware, getAllUsers);
app.get('/users/me', authMiddleware, getUserInfo);
app.get('/users/:id', authMiddleware, getUserById);
app.delete('/users/:id', authMiddleware, deleteUser);

const start = async () => {
  try {
    await db.sync({ force: false });
    app.listen(PORT);
    console.info(`Server ready at http://localhost:${PORT}`);
  } catch (error) {
    console.error(`Server error: ${error?.message}`);
  }
};

start();
