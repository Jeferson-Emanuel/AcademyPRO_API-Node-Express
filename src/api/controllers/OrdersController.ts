import { NextFunction, Request, Response } from 'express';
import moment from 'moment';
import * as service from '../../services/OrdersService';
import { Query } from '../../shared/types/pagination';

//Original
/* export const getAll = async (req: Request, res: Response) => {
    res.send(await service.getAll());
}; */

export const getAll = async (req: Request, res: Response) => {
    let {size, page, sort, order, startDate, endDate} = req.query;

    /* let [y1, m1 ,d1] = (startDate as string).split('-').map((x) => parseInt(x));
    let [y2, m2 ,d2] = (endDate as string).split('-').map((x) => parseInt(x));
    
    let sDate = new Date(y1, m1, d1);
    let eDate = new Date(y2, m2, d2);

    console.log(sDate, eDate);  */   

    const query: Query = {
        size: parseInt((size as string)),
        page: parseInt(page as string),
        sort: sort as string,
        order: order as string
    };

    res.send(await service.getAll(startDate as string, endDate as string, query));
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