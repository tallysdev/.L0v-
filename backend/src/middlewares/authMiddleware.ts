import { Request, Response, NextFunction } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
const authConfig = process.env.SECRET as Secret;

export default function (req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const parts = authHeader.split(' ');

  if (parts.length === 2) {
    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
      return res.status(401).json({ error: 'Token malformatted' });
    }

    jwt.verify(token, authConfig, (err: any, decoded: any) => {
      if (err) {
        return res.status(401).json({ error: 'Token invalid or expired' });
      }

      req.userId = decoded.id;
      return next();
    });
  } else {
    return res.status(401).json({ error: 'Token format is incorrect' });
  }
}
