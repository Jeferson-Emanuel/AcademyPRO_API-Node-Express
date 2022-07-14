import { DataTypes, Model, Optional } from 'sequelize';
import {sequelize} from '../sequelize';

export interface OfficesAttibutes {
    officeCode: string;
    city: string;
    phone: string;
    addressLine1: string;
    addressLine2?: string;
    state?: string;
    country: string;
    postalCode: string;
    territory: string;
};

export interface OfficesInput extends Optional<OfficesAttibutes, 'officeCode'>{};
export interface OfficesOutput extends Required<OfficesAttibutes>{};

class Offices extends Model<OfficesAttibutes, OfficesInput>{
    declare officeCode: string;
    declare city: string;
    declare phone: string;
    declare addressLine1: string;
    declare addressLine2: string;
    declare state: string;
    declare country: string;
    declare postalCode: string;
    declare territory: string;
};

Offices.init({
    officeCode: {type: DataTypes.STRING(10), primaryKey: true},
    city: {type: DataTypes.STRING(50), allowNull: false},
    phone: {type: DataTypes.STRING(50), allowNull: false},
    addressLine1: {type: DataTypes.STRING(50), allowNull: false},
    addressLine2: {type: DataTypes.STRING(50)},
    state: {type: DataTypes.STRING(50)},
    country: {type: DataTypes.STRING(50), allowNull: false},
    postalCode: {type: DataTypes.STRING(15), allowNull: false},
    territory: {type: DataTypes.STRING(10), allowNull: false},
}, {
    sequelize, //Connection name
    modelName: 'offices', //Table name
    paranoid: true
});

export default Offices;