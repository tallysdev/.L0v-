import { Router } from 'express';
import { UserController } from '../controller/userController';
import authMiddleware from '../middlewares/authMiddleware';

const userController = new UserController();

const userRoutes = Router();
userRoutes.post(
  '/',
  userController.createUser.bind(userController),
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
