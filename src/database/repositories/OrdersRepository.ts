import moment from 'moment';
import { Op } from 'sequelize';

import { Query } from '../../shared/types/pagination';
import AppError from '../../shared/utils/AppError';
import { getPagination } from '../../shared/utils/getPagination';
import model, {OrdersInput, OrdersOutput} from '../models/OrdersModel';

//Original
/* export const getAll = async (): Promise<OrdersOutput[]> => {    
    return await model.findAll();
}; */

//Classwork 15
/* export const getAll = async (): Promise<OrdersOutput[]> => {    
    return await model.findAll({include: {all: true}});
}; */

export const getAll = async (startDate: string, endDate: string, query: Query): Promise<{rows: OrdersOutput[], count: number}> => {
    const id = 'orderNumber';
    const {...pagination} = getPagination(id, query);

    if(!startDate) startDate = '1000-01-01';
    if(!endDate) endDate = '3000-12-31';

    return await model.findAndCountAll({
        where: {
            orderDate: {[Op.between]: [startDate, endDate]}
        },
        ...pagination
    });
};
/* 
export const getByID = async (id: number): Promise<OrdersOutput> => {
    const order = await model.findByPk(id);

    if(!order){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    return order;
}; */

export const getByID = async (id: number): Promise<OrdersOutput> => {
    const order = await model.findOne({
        where: {orderNumber: id},
        include: {all: true}
    });

    if(!order){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    return order;
};

export const create = async (payload: OrdersInput): Promise<OrdersOutput> => {
    return await model.create(payload);
};

export const updateByID = async (id: number, payload: OrdersInput): Promise<OrdersOutput> => {
    const order = await model.findByPk(id);

    if(!order){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    return order.update(payload);
};

export const deleteByID = async (id: number): Promise<void> => {
    const order = await model.findByPk(id);

    if(!order){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    await order.destroy();
};