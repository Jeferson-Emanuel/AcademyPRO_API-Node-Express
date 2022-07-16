import sequelize from '../sequelize';
import { DataTypes, Model } from 'sequelize';

interface UsersAttributes{
    email: string,
    password: string
};

export interface UsersHandler extends Required<UsersAttributes>{};

class Users extends Model<UsersAttributes, UsersAttributes>{
    declare email: string;
    declare password: string
}

Users.init({
    email: {type: DataTypes.STRING(50), primaryKey: true},
    password: {type: DataTypes.STRING(20), allowNull: false}
}, {
    sequelize,
    modelName: 'users',
    paranoid: true
});

export default Users;