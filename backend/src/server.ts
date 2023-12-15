import express from 'express';
import { routes } from './routes';
import multer from 'multer';
import cors from 'cors';

const app = express();
const upload = multer();
app.use(upload.single('photos'));

app.use(express.json());
app.use(routes);
app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar'],
  })
);
const port = process.env.PORT || '3333';

app.listen(port, () => console.log(`Server is running in port ${port}`));
