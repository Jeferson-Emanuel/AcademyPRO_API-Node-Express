import { Request, Response } from 'express';
import * as service from '../../services/AuthService';

export const signUp = async (req: Request, res: Response) => {
    res.status(201).send(await service.create(req.body));
};