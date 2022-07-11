import {PaymentsInput, PaymentsOutput} from '../database/models/PaymentsModel';
import * as repository from '../database/repositories/PaymentsRepository';

export const getAll = async (): Promise<PaymentsOutput[]> => {
    return await repository.getAll();
};

export const getByID = async (id: string): Promise<PaymentsOutput> => {
    return await repository.getByID(id);
};

export const create = async (payload: PaymentsInput): Promise<PaymentsOutput> => {
    return await repository.create(payload);
};

export const updateByID = async (id: string, payload: PaymentsInput): Promise<PaymentsOutput> => {
    return await repository.updateByID(id, payload);
};

export const deleteByID = async (id: string): Promise<void> => {
    await repository.deleteByID(id);
};