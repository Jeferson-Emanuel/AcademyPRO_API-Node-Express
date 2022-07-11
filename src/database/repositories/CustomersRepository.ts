import AppError from '../../utils/AppError';
import model, {CustomersInput, CustomersOutput} from '../models/CustomersModel';

export const getAll = async (): Promise<CustomersOutput[]> => {
    return await model.findAll();
};

export const getByID = async (id: number): Promise<CustomersOutput> => {
    const customer = await model.findByPk(id);

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