import {CustomersInput, CustomersOutput} from '../database/models/CustomersModel';
import * as repository from '../database/repositories/CustomersRepository';

export const getAll = async (): Promise<CustomersOutput[]> => {
    return await repository.getAll();
};

export const getByID = async (id: number): Promise<CustomersOutput> => {
    return await repository.getByID(id);
};

export const create = async (payload: CustomersInput): Promise<CustomersOutput> => {
    return await repository.create(payload);
};

export const updateByID = async (id: number, payload: CustomersInput): Promise<CustomersOutput> => {
    return await repository.updateByID(id, payload);
};

export const deleteByID = async (id: number): Promise<void> => {
    await repository.deleteByID(id);
};