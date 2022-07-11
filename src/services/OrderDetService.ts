import {OrderDetInput, OrderDetOutput} from '../database/models/OrderDetModel';
import * as repository from '../database/repositories/OrderDetRepository';

export const getAll = async (): Promise<OrderDetOutput[]> => {
    return await repository.getAll();
};

export const getByID = async (id: number): Promise<OrderDetOutput> => {
    return await repository.getByID(id);
};

export const create = async (payload: OrderDetInput): Promise<OrderDetOutput> => {
    return await repository.create(payload);
};

export const updateByID = async (id: number, payload: OrderDetInput): Promise<OrderDetOutput> => {
    return await repository.updateByID(id, payload);
};

export const deleteByID = async (id: number): Promise<void> => {
    await repository.deleteByID(id);
};