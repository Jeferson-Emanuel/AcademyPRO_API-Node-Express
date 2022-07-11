import { DataTypes, Model, Optional } from 'sequelize';
import {sequelize} from '../sequelize';
import Customers from './CustomersModel';

export interface OrdersAttibutes {
    orderNumber: number;
    orderDate: string;
    requiredDate: string;
    shippedDate: string;
    status: string;
    comments: string;
    customerNumber: number;
};

export interface OrdersInput extends Optional<OrdersAttibutes, 'shippedDate'|'comments'>{};
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
    orderDate: {type: DataTypes.STRING},
    requiredDate: {type: DataTypes.STRING},
    shippedDate: {type: DataTypes.STRING},
    status: {type: DataTypes.STRING},
    comments: {type: DataTypes.STRING},
    customerNumber: {type: DataTypes.INTEGER},
}, {
    sequelize, //Connection name
    modelName: 'orders' //Table name
});

//Orders.belongsTo(Customers, {foreignKey: {name: 'customerNumber'}});

export default Orders;