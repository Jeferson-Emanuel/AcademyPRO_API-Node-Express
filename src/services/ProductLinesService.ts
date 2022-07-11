import {ProductLinesInput, ProductLinesOutput} from '../database/models/ProductLinesModel';
import * as repository from '../database/repositories/ProductLinesRepository';

export const getAll = async (): Promise<ProductLinesOutput[]> => {
    return await repository.getAll();
};

export const getByID = async (id: string): Promise<ProductLinesOutput> => {
    return await repository.getByID(id);
};

export const create = async (payload: ProductLinesInput): Promise<ProductLinesOutput> => {
    return await repository.create(payload);
};

export const updateByID = async (id: string, payload: ProductLinesInput): Promise<ProductLinesOutput> => {
    return await repository.updateByID(id, payload);
};

export const deleteByID = async (id: string): Promise<void> => {
    await repository.deleteByID(id);
};