import { Router } from 'express';
import knex from '../database';
import { createNewUser } from '../controllers/userController';

const userRoutes = Router();

userRoutes.get('/', async (req, res) => {
  try {
    const users = await knex('users').select('*');

    return res.status(200).send(users);
  } catch (error) {
    console.log(error);
  }
});

userRoutes.post('/add', createNewUser);

export default userRoutes;
