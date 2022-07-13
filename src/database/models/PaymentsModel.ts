import { DataTypes, Model } from 'sequelize';
import {sequelize} from '../sequelize';
import Customers from './CustomersModel';

export interface PaymentsAttibutes {
    customerNumber: number;
    checkNumber: string;
    paymentDate: string;
    amount: number;
};

export interface PaymentsInput extends Required<PaymentsAttibutes>{};
export interface PaymentsOutput extends Required<PaymentsAttibutes>{};

class Payments extends Model<PaymentsAttibutes, PaymentsInput>{
    declare customerNumber: number;
    declare checkNumber: string;
    declare paymentDate: string;
    declare amount: number;
};

Payments.init({
    customerNumber: {type: DataTypes.INTEGER, primaryKey: true},
    checkNumber: {type: DataTypes.STRING(50), primaryKey: true},
    paymentDate: {type: DataTypes.DATE, allowNull: false},
    amount: {type: DataTypes.FLOAT(10,2), allowNull: false},
}, {
    sequelize, //Connection name
    modelName: 'payments' //Table name
});

Customers.hasMany(Payments, {foreignKey: 'customerNumber'});
Payments.belongsTo(Customers, {foreignKey: 'customerNumber'});

export default Payments;