import AppError from '../../shared/utils/AppError';
import Customers from '../models/CustomersModel';
import model, {PaymentsInput, PaymentsOutput} from '../models/PaymentsModel';

/* export const getAll = async (): Promise<PaymentsOutput[]> => {
    return await model.findAll();
}; */

export const getAll = async (): Promise<PaymentsOutput[]> => {
    return await model.findAll({
        include: Customers
    });
};

export const getByID = async (id: string): Promise<PaymentsOutput> => {
    const payments = await model.findOne({
        where: {'checkNumber': id},
        include: Customers
    });

    if(!payments){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    return payments;
};
/* 
export const getByID = async (id: string): Promise<PaymentsOutput> => {
    const payments = await model.findOne({
        where: {'checkNumber': id}
    });

    if(!payments){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    return payments;
}; */

export const create = async (payload: PaymentsInput): Promise<PaymentsOutput> => {
    return await model.create(payload);
};

export const updateByID = async (id: string, payload: PaymentsInput): Promise<PaymentsOutput> => {
    const payments = await model.findOne({
        where: {'checkNumber': id}
    });

    if(!payments){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    return payments.update(payload);
};

export const deleteByID = async (id: string): Promise<void> => {
    const payments = await model.findOne({
        where: {'checkNumber': id}
    });

    if(!payments){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    await payments.destroy();
};