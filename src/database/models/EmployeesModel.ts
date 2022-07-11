import { DataTypes, Model, Optional } from 'sequelize';
import {sequelize} from '../sequelize';

export interface EmployeesAttibutes {
    employeeNumber: number;
    lastName: string;
    firstName: string;
    extension: string;
    email: string;
    officeCode: string;
    reportsTo: number;
    jobTitle: string;
};

export interface EmployeesInput extends Optional<EmployeesAttibutes, 'reportsTo'>{};
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
    lastName: {type: DataTypes.STRING},
    firstName: {type: DataTypes.STRING},
    extension: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    officeCode: {type: DataTypes.STRING},
    reportsTo: {type: DataTypes.INTEGER},
    jobTitle: {type: DataTypes.STRING},
}, {
    sequelize, //Connection name
    modelName: 'employees' //Table name
});

export default Employees;