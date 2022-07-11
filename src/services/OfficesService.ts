import {OfficesInput, OfficesOutput} from '../database/models/OfficesModel';
import * as repository from '../database/repositories/OfficesRepository';

export const getAll = async (): Promise<OfficesOutput[]> => {
    return await repository.getAll();
};

export const getByID = async (id: string): Promise<OfficesOutput> => {
    return await repository.getByID(id);
};

export const create = async (payload: OfficesInput): Promise<OfficesOutput> => {
    return await repository.create(payload);
};

export const updateByID = async (id: string, payload: OfficesInput): Promise<OfficesOutput> => {
    return await repository.updateByID(id, payload);
};

export const deleteByID = async (id: string): Promise<void> => {
    await repository.deleteByID(id);
};