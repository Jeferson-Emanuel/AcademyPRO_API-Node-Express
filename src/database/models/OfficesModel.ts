import { DataTypes, Model, Optional } from 'sequelize';
import {sequelize} from '../sequelize';

export interface OfficesAttibutes {
    officeCode: string;
    city: string;
    phone: string;
    addressLine1: string;
    addressLine2: string;
    state: string;
    country: string;
    postalCode: string;
    territory: string;
};

export interface OfficesInput extends Optional<OfficesAttibutes, 'addressLine2'|'state'>{};
export interface OfficesOutput extends Required<OfficesAttibutes>{};

class Offices extends Model<OfficesAttibutes, OfficesInput>{
    declare officeCode: string;
    declare city: string;
    declare phone: string;
    declare addressLine1: string;
    declare addressLine2: string;
    declare state: string;
    declare country: string;
    declare postalCode: string;
    declare territory: string;
};

Offices.init({
    officeCode: {type: DataTypes.STRING, primaryKey: true},
    city: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING},
    addressLine1: {type: DataTypes.STRING},
    addressLine2: {type: DataTypes.STRING},
    state: {type: DataTypes.STRING},
    country: {type: DataTypes.STRING},
    postalCode: {type: DataTypes.STRING},
    territory: {type: DataTypes.STRING},
}, {
    sequelize, //Connection name
    modelName: 'offices' //Table name
});

export default Offices;