import { DataTypes, Model, Optional } from 'sequelize';
import {sequelize} from '../sequelize';
import Offices from './OfficesModel';

export interface EmployeesAttibutes {
    employeeNumber: number;
    lastName: string;
    firstName: string;
    extension: string;
    email: string;
    officeCode: string;
    reportsTo?: number;
    jobTitle: string;
};

export interface EmployeesInput extends Optional<EmployeesAttibutes, 'employeeNumber'>{};
export interface EmployeesOutput extends Required<EmployeesAttibutes>{};

class Employees extends Model<EmployeesAttibutes, EmployeesInput>{
    declare employeeNumber: number;
    declare lastName: string;
    declare firstName: string;
    declare extension: string;
    declare email: string;
    declare officeCode: string;
    declare reportsTo: number;
    declare jobTitle: string
};

Employees.init({
    employeeNumber: {type: DataTypes.INTEGER, primaryKey: true},
    lastName: {type: DataTypes.STRING(50), allowNull: false},
    firstName: {type: DataTypes.STRING(50), allowNull: false},
    extension: {type: DataTypes.STRING(10), allowNull: false},
    email: {type: DataTypes.STRING(100), allowNull: false},
    officeCode: {type: DataTypes.STRING(10), allowNull: false},
    reportsTo: {type: DataTypes.INTEGER},
    jobTitle: {type: DataTypes.STRING(50), allowNull: false},
}, {
    sequelize, //Connection name
    modelName: 'employees', //Table name
    paranoid: true
});

Offices.hasMany(Employees, {foreignKey: 'officeCode'});
Employees.belongsTo(Offices, {foreignKey: 'officeCode'});
Employees.hasOne(Employees, {foreignKey: 'reportsTo', onDelete: 'SET NULL'});
Employees.belongsTo(Employees, {foreignKey: 'reportsTo'});

export default Employees;