import { Op } from 'sequelize';
import { Query } from '../../shared/types/pagination';
import AppError from '../../shared/utils/AppError';
import { getPagination } from '../../shared/utils/getPagination';
import OrderDet from '../models/OrderDetModel';
import ProductLines from '../models/ProductLinesModel';
import model, {ProductsInput, ProductsOutput} from '../models/ProductsModel';

//Original
/* export const getAll = async (): Promise<ProductsOutput[]> => {
    return await model.findAll();
}; */

//Classroom 15
/* export const getAll = async (): Promise<ProductsOutput[]> => {
    return await model.findAll({
        //include: {all: true}
        include: [{model: ProductLines}, {model: OrderDet, as: 'order details'}]
    });
}; */

export const getAll = async (minValue: number, maxValue: number, query: Query): Promise<{rows: ProductsOutput[], count: number}> => {
    let {size, page, sort, order, ...filters} = query;

    const id = 'productCode';
    const {...pagination} = getPagination(id, query);

    if(!minValue && !maxValue) [minValue, maxValue] = [0, 999999999];

    return await model.findAndCountAll({
        where: {
            quantityInStock: {[Op.between]: [minValue, maxValue]},
            ...filters
        },
        ...pagination
    });
};
/* 
export const getByID = async (id: string): Promise<ProductsOutput> => {
    const product = await model.findByPk(id);

    if(!product){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    return product;
}; */

export const getByID = async (id: string): Promise<ProductsOutput> => {
    const product = await model.findOne({
        where: {productCode: id},
        include: {all: true}
    });

    if(!product){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    return product;
};

export const create = async (payload: ProductsInput): Promise<ProductsOutput> => {
    return await model.create(payload);
};

export const updateByID = async (id: string, payload: ProductsInput): Promise<ProductsOutput> => {
    const product = await model.findByPk(id);

    if(!product){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    return product.update(payload);
};

export const deleteByID = async (id: string): Promise<void> => {
    const product = await model.findByPk(id);

    if(!product){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    await product.destroy();
};