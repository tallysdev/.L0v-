import { PrismaClient, User } from '@prisma/client';
import { CreateUserInput, UpdateUserInput } from '../models/user';

export class UserUseCase {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async create(userData: CreateUserInput): Promise<User> {
    const bcrypt = require('bcrypt');
    const hash = await bcrypt.hash(userData.password, 12);
    userData.password = hash;
    const newUser = await this.prisma.user.create({
      data: userData,
    });

    return newUser;
  }

  public async update(
    userData: Partial<UpdateUserInput>,
    username: string
  ): Promise<User> {
    const updatedUser = await this.prisma.user.update({
      where: { username },
      data: userData,
    });

    return updatedUser;
  }

  public async findUser(username: string): Promise<User | null> {
    const user: User | null = await this.prisma.user.findUnique({
      where: { username },
    });

    return user;
  }

  public async listUsers(limit: number, offset: number): Promise<User[]> {
    const users = await this.prisma.user.findMany({
      take: limit,
      skip: offset,
    });
    return users;
  }
}
