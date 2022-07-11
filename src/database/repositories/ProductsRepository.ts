import AppError from '../../utils/AppError';
import model, {ProductsInput, ProductsOutput} from '../models/ProductsModel';

export const getAll = async (): Promise<ProductsOutput[]> => {
    return await model.findAll();
};

export const getByID = async (id: string): Promise<ProductsOutput> => {
    const product = await model.findByPk(id);

    if(!product){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    return product;
};

export const create = async (payload: ProductsInput): Promise<ProductsOutput> => {
    return await model.create(payload);
};

export const updateByID = async (id: string, payload: ProductsInput): Promise<ProductsOutput> => {
    const product = await model.findByPk(id);

    if(!product){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    return product.update(payload);
};

export const deleteByID = async (id: string): Promise<void> => {
    const product = await model.findByPk(id);

    if(!product){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    await product.destroy();
};