import {OrdersInput, OrdersOutput} from '../database/models/OrdersModel';
import * as repository from '../database/repositories/OrdersRepository';
import { Query } from '../shared/types/pagination';

//Original
/* export const getAll = async (): Promise<OrdersOutput[]> => {
    return await repository.getAll();
}; */

export const getAll = async (startDate: string, endDate: string, query: Query): Promise<{rows: OrdersOutput[], count: number}> => {
    return await repository.getAll(startDate, endDate, query);
};

export const getByID = async (id: number): Promise<OrdersOutput> => {
    return await repository.getByID(id);
};

export const create = async (payload: OrdersInput): Promise<OrdersOutput> => {
    return await repository.create(payload);
};

export const updateByID = async (id: number, payload: OrdersInput): Promise<OrdersOutput> => {
    return await repository.updateByID(id, payload);
};

export const deleteByID = async (id: number): Promise<void> => {
    await repository.deleteByID(id);
};