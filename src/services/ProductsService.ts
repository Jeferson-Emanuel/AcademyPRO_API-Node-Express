import {ProductsInput, ProductsOutput} from '../database/models/ProductsModel';
import * as repository from '../database/repositories/ProductsRepository';
import { Query } from '../shared/types/pagination';

//Original
/* export const getAll = async (): Promise<ProductsOutput[]> => {
    return await repository.getAll();
}; */

export const getAll = async (minValue: number, maxValue: number, query: Query): Promise<{rows: ProductsOutput[], count: number}> => {
    return await repository.getAll(minValue, maxValue, query);
};

export const getByID = async (id: string): Promise<ProductsOutput> => {
    return await repository.getByID(id);
};

export const create = async (payload: ProductsInput): Promise<ProductsOutput> => {
    return await repository.create(payload);
};

export const updateByID = async (id: string, payload: ProductsInput): Promise<ProductsOutput> => {
    return await repository.updateByID(id, payload);
};

export const deleteByID = async (id: string): Promise<void> => {
    await repository.deleteByID(id);
};