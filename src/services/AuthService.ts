import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import {UsersInput, UsersOutput} from '../database/models/UsersModel';
import * as repository from '../database/repositories/UsersRepository'
import AppError from '../shared/utils/AppError';
import {secret} from '../config/auth.config';

export const signUp = async ({email, password}: UsersInput): Promise<{email: string}> => {
    password = bcrypt.hashSync(password, 10);

    const user = await repository.create({email, password});

    return {email: user.email};
};

export const signIn = async ({email, password}: UsersInput): Promise<{token: string}> => {
    const token = jwt.sign({
        email: 'email',
    }, secret,{
        expiresIn: '24h'
    });

    try {
        const user = await repository.findByID(email);

        if(bcrypt.compareSync(password, user.password)){
            return {token: token};    
        }else{
            throw Error;
        };        
    } catch (error) {
        throw new AppError("Unauthorized", "User and/or password are incorrect.", 401);
    };
};