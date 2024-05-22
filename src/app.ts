import express, { Application, Request, Response, application } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.route';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application route

app.use('/api', ProductRoutes);

app.get('/', (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
});

export default app;
