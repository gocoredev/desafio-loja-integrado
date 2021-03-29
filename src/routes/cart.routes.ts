import { Router } from 'express';
import knex from '../database';
import { PostCart } from '../controllers/cartController';

const cartRoutes = Router();

cartRoutes.get('/', async (req, res) => {
  try {
    const users = await knex('users').select('*');

    return res.status(200).send(users);
  } catch (error) {
    console.log(error);
  }
});

cartRoutes.post('/', PostCart);

export default cartRoutes;
