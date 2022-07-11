import { DataTypes, Model, Optional } from 'sequelize';
import {sequelize} from '../sequelize';
import Orders from './OrdersModel';

export interface CustomersAttibutes {
    customerNumber: number;
    customerName: string;
    contactLastName: string;
    contactFirstName: string;
    phone: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    salesRepEmployeeNumber: number;
    creditLimit: number
};

export interface CustomersInput extends Optional<CustomersAttibutes, 'addressLine2'|'state'|'postalCode'|'salesRepEmployeeNumber'|'creditLimit'>{};
export interface CustomersOutput extends Required<CustomersAttibutes>{};

class Customers extends Model<CustomersAttibutes, CustomersInput>{
    declare customerNumber: number;
    declare customerName: string;
    declare contactLastName: string;
    declare contactFirstName: string;
    declare phone: string;
    declare addressLine1: string;
    declare addressLine2: string;
    declare city: string;
    declare state: string;
    declare postalCode: string;
    declare country: string;
    declare salesRepEmployeeNumber: number;
    declare creditLimit: number
};

Customers.init({
    customerNumber: {type: DataTypes.INTEGER, primaryKey: true},
    customerName: {type: DataTypes.STRING},
    contactLastName: {type: DataTypes.STRING},
    contactFirstName: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING},
    addressLine1: {type: DataTypes.STRING},
    addressLine2: {type: DataTypes.STRING},
    city: {type: DataTypes.STRING},
    state: {type: DataTypes.STRING},
    postalCode: {type: DataTypes.STRING},
    country: {type: DataTypes.STRING},
    salesRepEmployeeNumber: {type: DataTypes.INTEGER},
    creditLimit: {type: DataTypes.FLOAT},
}, {
    sequelize, //Connection name
    modelName: 'customers' //Table name
});

//Customers.hasMany(Orders);

export default Customers;