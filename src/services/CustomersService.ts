import {CustomersInput, CustomersOutput} from '../database/models/CustomersModel';
import * as repository from '../database/repositories/CustomersRepository';
import { Query } from '../shared/types/pagination';

export const getAll = async (customerName: string, minValue: number, maxValue: number, query: Query): Promise<{rows:CustomersOutput[], count: number}> => {
    return await repository.getAll(customerName, minValue, maxValue, query);
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