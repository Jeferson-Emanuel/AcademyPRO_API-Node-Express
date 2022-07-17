import sequelize from '../sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface UsersAttributes{
    email: string,
    password: string
};

export interface UsersInput extends Required<UsersAttributes>{};
export interface UsersOutput extends Required<UsersAttributes>{};

class Users extends Model<UsersAttributes, UsersInput>{
    declare email: string;
    declare password: string
}

Users.init({
    email: {type: DataTypes.STRING(50), primaryKey: true},
    password: {type: DataTypes.STRING(), allowNull: false}
}, {
    sequelize,
    modelName: 'users',
    paranoid: true
});

export default Users;