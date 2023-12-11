import express from 'express';
import { routes } from './routes';
import multer from 'multer';

const app = express();
const upload = multer();
app.use(upload.any());

app.use(express.json());
app.use(routes);

const port = process.env.PORT || '3333';

app.listen(port, () => console.log(`Server is running in port ${port}`));
