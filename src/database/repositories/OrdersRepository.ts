import AppError from '../../utils/AppError';
import model, {OrdersInput, OrdersOutput} from '../models/OrdersModel';

export const getAll = async (): Promise<OrdersOutput[]> => {
    return await model.findAll();
};

export const getByID = async (id: number): Promise<OrdersOutput> => {
    const order = await model.findByPk(id);

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