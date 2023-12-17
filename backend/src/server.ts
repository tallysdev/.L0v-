import express from 'express';
import { routes } from './routes';
import multer from 'multer';
import cors from 'cors';

const app = express();
const upload = multer();
app.use(upload.single('photos'));

app.use(express.json());
app.use(routes);

if (process.env.DISABLE_CORS !== 'true') {
  app.use(cors({ origin: true, credentials: true, maxAge: 10000000 }));
}

const port = process.env.PORT || '3333';

app.listen(port, () => console.log(`Server is running in port ${port}`));
