import { Op } from 'sequelize';
import { Query } from '../../shared/types/pagination';
import AppError from '../../shared/utils/AppError';
import { getPagination } from '../../shared/utils/getPagination';
import model, {CustomersInput, CustomersOutput} from '../models/CustomersModel';

/* export const getAll = async (): Promise<CustomersOutput[]> => {
    return await model.findAll();
}; */

export const getAll = async (customerName: string, minValue: number, maxValue: number, query: Query): Promise<{rows:CustomersOutput[], count: number}> => {
    let {size, page, sort, order, ...filters} =  query;

    const id = 'customerNumber';
    const {...pagination} = getPagination(id, query);

    if(!customerName) customerName='';
    if(!minValue && !maxValue) [minValue, maxValue] = [0, 999999999];

    return await model.findAndCountAll({
        where: {
            customerName: {[Op.substring]: customerName},
            creditLimit: {[Op.between]: [minValue, maxValue]},
            ...filters
        },
        ...pagination
    });
};

/* export const getByID = async (id: number): Promise<CustomersOutput> => {
    const customer = await model.findByPk(id);

    if(!customer){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    return customer;
}; */

export const getByID = async (id: number): Promise<CustomersOutput> => {
    const customer = await model.findOne({
        where: {customerNumber: id},
        include: { all: true, nested: true },
    });

    if(!customer){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    return customer;
};

export const create = async (payload: CustomersInput): Promise<CustomersOutput> => {
    return await model.create(payload);
};

export const updateByID = async (id: number, payload: CustomersInput): Promise<CustomersOutput> => {
    const customer = await model.findByPk(id);

    if(!customer){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    return customer.update(payload);
};

export const deleteByID = async (id: number): Promise<void> => {
    const customer = await model.findByPk(id);

    if(!customer){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    await customer.destroy();
};