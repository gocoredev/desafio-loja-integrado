import express, { Router } from 'express';
import routes from './routes/index.routes';

const app = express();
const router = Router();
export {
  router,
};

app.use(express.json());
app.use(routes);

export default app;
