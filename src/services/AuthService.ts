import { UsersHandler } from '../database/models/UsersModel';
import * as repository from '../database/repositories/UsersRepository'

export const create = async (payload: UsersHandler) => {
    return await repository.create(payload);
};