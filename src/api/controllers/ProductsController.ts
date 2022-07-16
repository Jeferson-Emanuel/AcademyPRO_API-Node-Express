import { NextFunction, Request, Response } from 'express';
import * as service from '../../services/ProductsService';
import { Query } from '../../shared/types/pagination';

//Original
/* export const getAll = async (req: Request, res: Response) => {
    res.send(await service.getAll());
}; */

export const getAll = async (req: Request, res: Response) => {
    const {size, page, sort, order, minValue, maxValue,...filters} = req.query;

    const query: Query = {
        size: parseInt(size as string),
        page: parseInt(page as string),
        sort: sort as string,
        order: order as string,
        ...filters
    };
    
    res.send(await service.getAll(parseInt(minValue as string), parseInt(maxValue as string), query));
};

export const getByID = async (req: Request, res: Response, next: NextFunction) => {
    res.send(await service.getByID(req.params.id));
};

export const create = async (req: Request, res: Response, next: NextFunction) => {
    res.status(201).send(await service.create(req.body));
};

export const updateByID = async (req: Request, res: Response, next: NextFunction) => {
    res.send(await service.updateByID(req.params.id, req.body));
};

export const deleteByID = async (req: Request, res: Response, next: NextFunction) => {
    await service.deleteByID(req.params.id);
    res.status(204).send();
};