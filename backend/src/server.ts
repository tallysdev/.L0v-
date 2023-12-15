import express from 'express';
import { routes } from './routes';
import multer from 'multer';
import cors from 'cors';

const app = express();
const upload = multer();
app.use(upload.single('photos'));

app.use(express.json());
app.use(routes);
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});
const port = process.env.PORT || '3333';

app.listen(port, () => console.log(`Server is running in port ${port}`));
