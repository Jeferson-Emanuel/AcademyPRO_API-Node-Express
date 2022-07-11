import { DataTypes, Model } from 'sequelize';
import {sequelize} from '../sequelize';

export interface ProductLinesAttibutes {
    productLine: string;
    textDescription: string;
    htmlDescription: string;
    image: undefined;
};

export interface ProductLinesInput extends Required<ProductLinesAttibutes>{};
export interface ProductLinesOutput extends Required<ProductLinesAttibutes>{};

class ProductLines extends Model<ProductLinesAttibutes, ProductLinesInput>{
    declare productLine: string;
    declare textDescription: string;
    declare htmlDescription: string;
    declare image: undefined;
};

ProductLines.init({
    productLine: {type: DataTypes.STRING, primaryKey: true},
    textDescription: {type: DataTypes.STRING},
    htmlDescription: {type: DataTypes.TEXT},
    image: {type: DataTypes.BLOB},
}, {
    sequelize, //Connection name
    modelName: 'productlines' //Table name
});

export default ProductLines;