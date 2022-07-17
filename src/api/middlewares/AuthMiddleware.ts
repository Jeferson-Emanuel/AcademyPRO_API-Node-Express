import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { secret } from '../../config/auth.config';
import AppError from '../../shared/utils/AppError';

export const ensureIsAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if(!token){
        throw new AppError('AccessForbidden', 'Not enough rights to access this resource.', 403)
    };

    try {
        jwt.verify(token, secret);
    } catch (error) {
        throw new AppError('InvalidToken', 'Invalid token.', 401)
    };

    next();
};