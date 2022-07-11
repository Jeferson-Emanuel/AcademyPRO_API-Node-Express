import AppError from '../../utils/AppError';
import model, {ProductLinesInput, ProductLinesOutput} from '../models/ProductLinesModel';

export const getAll = async (): Promise<ProductLinesOutput[]> => {
    return await model.findAll();
};

export const getByID = async (id: string): Promise<ProductLinesOutput> => {
    const productline = await model.findByPk(id);

    if(!productline){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    return productline;
};

export const create = async (payload: ProductLinesInput): Promise<ProductLinesOutput> => {
    return await model.create(payload);
};

export const updateByID = async (id: string, payload: ProductLinesInput): Promise<ProductLinesOutput> => {
    const productline = await model.findByPk(id);

    if(!productline){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    return productline.update(payload);
};

export const deleteByID = async (id: string): Promise<void> => {
    const productline = await model.findByPk(id);

    if(!productline){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    await productline.destroy();
};