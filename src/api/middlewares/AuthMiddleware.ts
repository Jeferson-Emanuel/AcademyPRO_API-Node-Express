import { NextFunction, Request, Response } from 'express';
import AppError from '../../shared/utils/AppError';

export const ensureIsAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if(!token){
        throw new AppError('MissingToken', 'No token present.', 401)
    }
};