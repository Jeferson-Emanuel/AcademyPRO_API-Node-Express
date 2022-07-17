import AppError from '../../shared/utils/AppError';
import Users, {UsersInput, UsersOutput} from '../models/UsersModel'

export const findByID = async (email: string): Promise<UsersOutput> => {
    const user = await Users.findByPk(email);

    if(!user){
        throw new AppError('NotFountError', 'User not found.', 404);
    }

    return user;
};

export const create = async (payload: UsersInput): Promise<UsersOutput> => {
    const {email} = payload;
    const user = await Users.findByPk(email);

    if(user){
        throw new AppError('UserConclict', 'User already registered,', 409);
    }

    return await Users.create(payload);
};