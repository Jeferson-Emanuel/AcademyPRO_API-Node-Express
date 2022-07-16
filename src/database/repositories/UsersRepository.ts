import { Model } from 'sequelize/types'
import AppError from '../../shared/utils/AppError';
import Users, {UsersHandler} from '../models/UsersModel'

export const findByID = async (email: string): Promise<UsersHandler> => {
    const user = await Users.findByPk(email);

    if(!user){
        throw new AppError('NotFountError', 'User not found.', 404);
    }

    return user;
};

export const create = async (payload: UsersHandler): Promise<UsersHandler> => {
    const {email, password} = payload;
    const user = await Users.findByPk(email);

    if(user){
        throw new AppError('UserConclict', 'User already registered,', 409);
    }

    return await Users.create(payload);
};