import AppError from '../../utils/AppError';
import model, {OrderDetInput, OrderDetOutput} from '../models/OrderDetModel';
import Orders from '../models/OrdersModel';
import Products from '../models/ProductsModel';

export const getAll = async (): Promise<OrderDetOutput[]> => {
    return await model.findAll();
};

export const getAllNested = async (): Promise<OrderDetOutput[]> => {
    return await model.findAll({include: [{model: Orders}, {model: Products}]});
};

export const getByID = async (id: number): Promise<OrderDetOutput> => {
    const orderdet = await model.findByPk(id);

    if(!orderdet){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    return orderdet;
};

export const create = async (payload: OrderDetInput): Promise<OrderDetOutput> => {
    return await model.create(payload);
};

export const updateByID = async (id: number, payload: OrderDetInput): Promise<OrderDetOutput> => {
    const orderdet = await model.findByPk(id);

    if(!orderdet){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    return orderdet.update(payload);
};

export const deleteByID = async (id: number): Promise<void> => {
    const orderdet = await model.findByPk(id);

    if(!orderdet){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    await orderdet.destroy();
};