import { DataTypes, Model } from 'sequelize';
import {sequelize} from '../sequelize';

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
    checkNumber: {type: DataTypes.STRING},
    paymentDate: {type: DataTypes.STRING},
    amount: {type: DataTypes.FLOAT},
}, {
    sequelize, //Connection name
    modelName: 'payments' //Table name
});

export default Payments;