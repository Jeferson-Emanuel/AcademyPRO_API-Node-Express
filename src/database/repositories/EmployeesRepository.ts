import AppError from '../../utils/AppError';
import model, {EmployeesInput, EmployeesOutput} from '../models/EmployeesModel';

export const getAll = async (): Promise<EmployeesOutput[]> => {
    return await model.findAll();
};

export const getByID = async (id: number): Promise<EmployeesOutput> => {
    const employee = await model.findByPk(id);

    if(!employee){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    return employee;
};

export const create = async (payload: EmployeesInput): Promise<EmployeesOutput> => {
    return await model.create(payload);
};

export const updateByID = async (id: number, payload: EmployeesInput): Promise<EmployeesOutput> => {
    const employee = await model.findByPk(id);

    if(!employee){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    return employee.update(payload);
};

export const deleteByID = async (id: number): Promise<void> => {
    const employee = await model.findByPk(id);

    if(!employee){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    await employee.destroy();
};