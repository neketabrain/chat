/* eslint-disable no-console */

import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (_, res) => {
  res.send('Hello World');
});

const start = () => {
  try {
    app.listen(PORT);
    console.log(`Server ready at http://localhost:${PORT}`);
  } catch (error) {
    console.log(`Server error: ${error?.message}`);
  }
};

start();
