import { DataTypes, Model } from 'sequelize';
import {sequelize} from '../sequelize';

export interface ProductsAttibutes {
    productCode: string;
    productName: string;
    productLine: string;
    productScale: string;
    productVendor: string;
    productDescription: string;
    quantityInStock: number;
    buyPrice: number;
    MSRP: number;
};

export interface ProductsInput extends Required<ProductsAttibutes>{};
export interface ProductsOutput extends Required<ProductsAttibutes>{};

class Products extends Model<ProductsAttibutes, ProductsInput>{
    declare productCode: string;
    declare productName: string;
    declare productLine: string;
    declare productScale: string;
    declare productVendor: string;
    declare productDescription: string;
    declare quantityInStock: number;
    declare buyPrice: number;
    declare MSRP: number;
};

Products.init({
    productCode: {type: DataTypes.STRING, primaryKey: true},
    productName: {type: DataTypes.STRING},
    productLine: {type: DataTypes.STRING},
    productScale: {type: DataTypes.STRING},
    productVendor: {type: DataTypes.STRING},
    productDescription: {type: DataTypes.TEXT},
    quantityInStock: {type: DataTypes.SMALLINT},
    buyPrice: {type: DataTypes.FLOAT},
    MSRP: {type: DataTypes.FLOAT},
}, {
    sequelize, //Connection name
    modelName: 'products' //Table name
});

export default Products;