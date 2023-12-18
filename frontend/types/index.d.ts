
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
