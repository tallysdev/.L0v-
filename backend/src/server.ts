import express from 'express';
import { routes } from './routes';
//import multer from 'multer';
//import cors from 'cors';

const app = express();

app.use(express.json());
app.use(routes);
// if (process.env.DISABLE_CORS !== 'true') {
//   app.use(cors({ origin: true, credentials: true, maxAge: 10000000 }));
//   app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader(
//       'Access-Control-Allow-Headers',
//       'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     res.setHeader('Access-Control-Allow-Credentials', 'true');
//     next();
//   });
// }

const port = process.env.PORT || '3333';

app.listen(port, () => console.log(`Server is running in port ${port}`));
