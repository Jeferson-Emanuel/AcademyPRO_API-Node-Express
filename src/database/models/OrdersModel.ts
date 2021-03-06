import { DataTypes, Model, Optional } from 'sequelize';
import {sequelize} from '../sequelize';
import Customers from './CustomersModel';
import OrderDet from './OrderDetModel';

export interface OrdersAttibutes {
    orderNumber: number;
    orderDate: string;
    requiredDate: string;
    shippedDate?: string;
    status: string;
    comments?: string;
    customerNumber: number;
};

export interface OrdersInput extends Optional<OrdersAttibutes, 'orderNumber'>{};
export interface OrdersOutput extends Required<OrdersAttibutes>{};

class Orders extends Model<OrdersAttibutes, OrdersInput>{
    declare orderNumber: number;
    declare orderDate: string;
    declare requiredDate: string;
    declare shippedDate: string;
    declare status: string;
    declare comments: string;
    declare customerNumber: number
};

Orders.init({
    orderNumber: {type: DataTypes.INTEGER, primaryKey: true},
    orderDate: {type: DataTypes.DATEONLY, allowNull: false},
    requiredDate: {type: DataTypes.DATEONLY, allowNull: false},
    shippedDate: {type: DataTypes.DATEONLY},
    status: {type: DataTypes.STRING(15), allowNull: false},
    comments: {type: DataTypes.TEXT},
    customerNumber: {type: DataTypes.INTEGER, allowNull: false},
}, {
    sequelize, //Connection name
    modelName: 'orders' //Table name
});

Orders.belongsTo(Customers, {foreignKey: 'customerNumber', onDelete: 'CASCADE'});
Customers.hasMany(Orders, {foreignKey: 'customerNumber'});

export default Orders;