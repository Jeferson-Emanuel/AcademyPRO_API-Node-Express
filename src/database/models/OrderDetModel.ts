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
    orderNumber: {type: DataTypes.INTEGER, allowNull: false},
    productCode: {type: DataTypes.STRING(15), allowNull: false},
    quantityOrdered: {type: DataTypes.INTEGER, allowNull: false},
    priceEach: {type: DataTypes.DECIMAL(10,2), allowNull: false},
    orderLineNumber: {type: DataTypes.SMALLINT, allowNull: false},
}, {
    sequelize, //Connection name
    modelName: 'orderdetails' //Table name
});

OrderDet.removeAttribute('id');

OrderDet.belongsTo(Orders, {foreignKey: 'orderNumber'});
Orders.hasMany(OrderDet, {as: 'order details', foreignKey: 'orderNumber'});

OrderDet.belongsTo(Products, {foreignKey: 'productCode'});
Products.hasMany(OrderDet, {as: 'order details', foreignKey: 'productCode'});

Orders.belongsToMany(Products, {foreignKey: 'orderNumber', through: OrderDet});
Products.belongsToMany(Orders, {foreignKey: 'productCode', through: OrderDet});

export default OrderDet;