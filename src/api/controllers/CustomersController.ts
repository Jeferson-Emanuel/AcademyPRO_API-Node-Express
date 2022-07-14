import { NextFunction, Request, Response } from 'express';
import * as service from '../../services/CustomersService';

export const getAll = async (req: Request, res: Response) => {
    res.send(await service.getAll());
};

export const getByID = async (req: Request, res: Response, next: NextFunction) => {
    res.send(await service.getByID(parseInt(req.params.id)));
};

export const create = async (req: Request, res: Response, next: NextFunction) => {
    res.status(201).send(await service.create(req.body));
};

export const updateByID = async (req: Request, res: Response, next: NextFunction) => {
    res.send(await service.updateByID(parseInt(req.params.id), req.body));
};

export const deleteByID = async (req: Request, res: Response, next: NextFunction) => {
    await service.deleteByID(parseInt(req.params.id));
    res.status(204).send();
};