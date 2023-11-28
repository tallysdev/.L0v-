import { Prisma, User as PrismaUser } from "@prisma/client";

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  birthdate: Date;
  gender: string;
  bio?: string | null;
  photos?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateUserInput = Omit<Prisma.UserCreateInput, "likedBy" | "likes">;

export type UpdateUserInput = Omit<Prisma.UserUpdateInput, "likedBy" | "likes">;

export interface UserService {
  createUser(data: CreateUserInput): Promise<User>;
  getUserById(userId: string): Promise<User | null>;
  updateUser(userId: string, data: UpdateUserInput): Promise<User | null>;
  deleteUser(userId: string): Promise<void>;
}
