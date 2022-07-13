import { DataTypes, Model } from 'sequelize';
import {sequelize} from '../sequelize';
import Orders from './OrdersModel';
import Products from './ProductsModel';

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
    productCode: {type: DataTypes.STRING(15), primaryKey: true},
    quantityOrdered: {type: DataTypes.INTEGER, allowNull: false},
    priceEach: {type: DataTypes.FLOAT(10,2), allowNull: false},
    orderLineNumber: {type: DataTypes.SMALLINT, allowNull: false},
}, {
    sequelize, //Connection name
    modelName: 'orderdetails' //Table name
});

Products.belongsToMany(Orders, {through: 'OrderDet', foreignKey: 'productCode'});
Orders.belongsToMany(Products, {through: 'OrderDet', foreignKey: 'orderNumber'});

export default OrderDet;