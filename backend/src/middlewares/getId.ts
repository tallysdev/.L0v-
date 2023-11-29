import { Request, Response, NextFunction } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
const authConfig = process.env.SECRET as Secret;

export interface DecodedToken {
  id: string;
}

export function getUserIdFromToken(req: Request): string | null {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return null;
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(token, authConfig) as DecodedToken;
    return decoded.id;
  } catch (err) {
    return null;
  }
}
