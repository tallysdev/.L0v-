import { Router } from 'express';
import { UserController } from '../controller/userController';
import authMiddleware from '../middlewares/authMiddleware';
import multer from 'multer';
import uploadConfig from '../config/upload';

const userController = new UserController();

// Create a multer instance with the configured storage

const userRoutes = Router();
const upload = multer(uploadConfig);
userRoutes.post(
  '/',
  userController.createUser.bind(userController),
  upload.single('photos')
);
userRoutes.post('/auth', userController.authUser.bind(userController));
userRoutes.post(
  '/github/:username',
  userController.createGitHubUser.bind(userController)
); //TODO, revisar se realmente vale a pena manter este
userRoutes.use(authMiddleware);
userRoutes.post(
  '/like',
  authMiddleware,
  userController.likeUser.bind(userController)
);
userRoutes.get(
  '/:username',
  authMiddleware,
  userController.findUser.bind(userController)
);
userRoutes.get(
  '/',
  authMiddleware,
  userController.listUsers.bind(userController)
);
export { userRoutes };
