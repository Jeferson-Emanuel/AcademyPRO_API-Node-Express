import AppError from '../../utils/AppError';
import Employees from '../models/EmployeesModel';
import model, {OfficesInput, OfficesOutput} from '../models/OfficesModel';

/* export const getAll = async (): Promise<OfficesOutput[]> => {
    return await model.findAll();
}; */

export const getAll = async (): Promise<OfficesOutput[]> => {
    return await model.findAll({
        include: Employees
    });
};

/* export const getByID = async (id: string): Promise<OfficesOutput> => {
    const office = await model.findByPk(id);

    if(!office){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    return office;
}; */

export const getByID = async (id: string): Promise<OfficesOutput> => {
    const office = await model.findOne({
        where: {officeCode: id},
        include: Employees
    });

    if(!office){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    return office;
};

export const create = async (payload: OfficesInput): Promise<OfficesOutput> => {
    return await model.create(payload);
};

export const updateByID = async (id: string, payload: OfficesInput): Promise<OfficesOutput> => {
    const office = await model.findByPk(id);

    if(!office){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    return office.update(payload);
};

export const deleteByID = async (id: string): Promise<void> => {
    const office = await model.findByPk(id);

    if(!office){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    await office.destroy();
};