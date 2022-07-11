import { DataTypes, Model } from 'sequelize';
import {sequelize} from '../sequelize';

export interface OrderDetAttibutes {
    orderNumber: number;
    productCode: string;
    quantityOrdered: number;
    priceEach: number;
    orderLineNumber: number;
};

export interface OrderDetInput extends Required<OrderDetAttibutes>{};
export interface OrderDetOutput extends Required<OrderDetAttibutes>{};

class OrderDet extends Model<OrderDetAttibutes, OrderDetInput>{
    declare orderNumber: number;
    declare productCode: string;
    declare quantityOrdered: number;
    declare priceEach: number;
    declare orderLineNumber: number;
};

OrderDet.init({
    orderNumber: {type: DataTypes.INTEGER, primaryKey: true},
    productCode: {type: DataTypes.STRING},
    quantityOrdered: {type: DataTypes.INTEGER},
    priceEach: {type: DataTypes.FLOAT},
    orderLineNumber: {type: DataTypes.SMALLINT},
}, {
    sequelize, //Connection name
    modelName: 'orderdetails' //Table name
});

export default OrderDet;