import jwt, { Secret } from 'jsonwebtoken';
export function generateAccessToken(params = {}) {
  return jwt.sign(params, process.env.SECRET as Secret, {
    expiresIn: '5d',
  });
}
