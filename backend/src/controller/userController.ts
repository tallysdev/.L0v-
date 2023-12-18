import { Request, Response } from 'express';
import { PrismaClient, User } from '@prisma/client';
import { StatusCodes } from 'http-status-codes';
import { CreateUserInput, UpdateUserInput } from '../models/user';
import { UserUseCase } from '../usecase/userUsecase';
import githubApi from '../services/githubApi';
import { generateAccessToken } from '../config/generateToken';

const prisma = new PrismaClient();
import bcrypt from 'bcrypt';

export class UserController {
  private readonly userUseCase: UserUseCase;
  private readonly validGenders = ['Male', 'Female', 'Not specified'];

  constructor() {
    this.userUseCase = new UserUseCase();
  }

  public async createUser(req: Request, res: Response) {
    try {
      const userData: CreateUserInput = req.body;
      const existingUsername = await prisma.user.findUnique({
        where: { username: userData.username },
      });

      if (existingUsername) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ error: 'User already exists!' });
      }

      if (!this.validGenders.includes(userData.gender)) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ error: 'Not a valid gender' });
      }

      // if (req.file) {
      //   try {
      //     const imageUploaded = await getImage(req);
      //     const imageData = await uploadImage(imageUploaded);

      //   } catch (error) {
      //     console.error('Error uploading image:', error);
      //     return res
      //       .status(StatusCodes.INTERNAL_SERVER_ERROR)
      //       .json({ message: 'Error uploading image to Cloudinary' });
      //   }
      // }

      const user: User = await this.userUseCase.create(userData);
      res.status(StatusCodes.CREATED).json(user);
    } catch (error) {
      console.error(error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'An error occurred while creating the user',
      });
    }
  }

  public async updateUser(req: Request, res: Response) {
    const { username } = req.params;

    try {
      const updateUserData: Partial<UpdateUserInput> = req.body;

      const existingUser = await prisma.user.findUnique({
        where: { username },
      });

      if (!existingUser) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .json({ error: 'User not found' });
      }

      const updatedUser: User = await this.userUseCase.update(
        updateUserData,
        username
      );

      res.status(StatusCodes.OK).json(updatedUser);
    } catch (error) {
      console.error(error);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error.' });
    }
  }
  public async findUser(req: Request, res: Response) {
    // Extract username from the request parameters
    const { username } = req.params;

    try {
      const user: User | null = await this.userUseCase.findUser(username);

      if (!user) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .json({ error: 'User not found' });
      }

      return res.status(StatusCodes.OK).json(user);
    } catch (error) {
      console.error(error);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error.' });
    }
  }

  public async listUsers(req: Request, res: Response) {
    try {
      const limit: number = parseInt(req.query.limit as string) || 10;
      const offset: number = parseInt(req.query.offset as string) || 0;

      const users: User[] = await this.userUseCase.listUsers(limit, offset);
      res.status(StatusCodes.OK).json(users);
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'An error occurred while fetching users',
      });
    }
  }

  public async likeUser(req: Request, res: Response) {
    const { likerId, targetUserId } = req.body;

    try {
      const liker = await prisma.user.findUnique({
        where: { id: likerId },
      });

      const targetUser = await prisma.user.findUnique({
        where: { id: targetUserId },
      });

      if (!liker || !targetUser) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .json({ error: 'User(s) not found' });
      }

      // Check if the liker has already liked the target user
      const existingLike = await prisma.like.findFirst({
        where: {
          OR: [
            { AND: [{ likedById: likerId }, { likesId: targetUserId }] },
            { AND: [{ likedById: targetUserId }, { likesId: likerId }] },
          ],
        },
      });

      if (existingLike) {
        return res.status(StatusCodes.OK).json({
          message: "It's a Match! You and the user liked each other.",
        });
      }

      const newLike = await prisma.like.create({
        data: {
          likedById: likerId,
          likesId: targetUserId,
        },
      });

      res.status(StatusCodes.OK).json(newLike);
    } catch (error) {
      console.error(error);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error.' });
    }
  }

  public async createGitHubUser(req: Request, res: Response) {
    const { username } = req.params;
    const { userData }: { userData: Partial<CreateUserInput> } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: { username: username },
    });

    if (existingUser) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: 'User already exists!' });
    }

    try {
      const response = await githubApi.get(`/${username}`);
      const { data } = response;

      const user: User = await this.userUseCase.create({
        ...data,
        ...userData,
      });

      res.status(StatusCodes.CREATED).json(user);
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'An error occurred while creating the GitHub user',
      });
    }
  }

  public async authUser(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const user = await prisma.user.findUnique({ where: { email: email } });

      if (!user) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .send({ error: 'User not found' });
      }

      if (!(await bcrypt.compare(password, user.password))) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .send({ error: 'Invalid password' });
      }

      res.setHeader('Access-Control-Allow-Origin', '*');

      //Criação de token baseado no id do usuário
      res
        .status(StatusCodes.OK)
        .json({ token: generateAccessToken({ id: user.id }) });
    } catch (err) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: 'Authentication failed' });
    }
  }
}
