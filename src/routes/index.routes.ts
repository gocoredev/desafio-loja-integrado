import { Router } from 'express';
import userRoutes from './user.routes';
import cartRoutes from './cart.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/cart', cartRoutes);
export default routes;
