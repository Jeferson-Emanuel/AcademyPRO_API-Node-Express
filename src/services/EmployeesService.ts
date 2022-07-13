import {EmployeesInput, EmployeesOutput} from '../database/models/EmployeesModel';
import * as repository from '../database/repositories/EmployeesRepository';

export const getAll = async (): Promise<EmployeesOutput[]> => {
    return await repository.getAll();
};

export const getAllNested = async (): Promise<EmployeesOutput[]> => {
    return await repository.getAllNested();
};

export const getAllReports = async (): Promise<EmployeesOutput[]> => {
    return await repository.getAllReports();
};

export const getByID = async (id: number): Promise<EmployeesOutput> => {
    return await repository.getByID(id);
};

export const create = async (payload: EmployeesInput): Promise<EmployeesOutput> => {
    return await repository.create(payload);
};

export const updateByID = async (id: number, payload: EmployeesInput): Promise<EmployeesOutput> => {
    return await repository.updateByID(id, payload);
};

export const deleteByID = async (id: number): Promise<void> => {
    await repository.deleteByID(id);
};