import { DataTypes, Model } from 'sequelize';
import {sequelize} from '../sequelize';

export interface ProductLinesAttibutes {
    productLine: string;
    textDescription?: string;
    htmlDescription?: string;
    image?: string;
};

export interface ProductLinesInput extends Required<ProductLinesAttibutes>{};
export interface ProductLinesOutput extends Required<ProductLinesAttibutes>{};

class ProductLines extends Model<ProductLinesAttibutes, ProductLinesInput>{
    declare productLine: string;
    declare textDescription: string;
    declare htmlDescription: string;
    declare image: string;
};

ProductLines.init({
    productLine: {type: DataTypes.STRING(50), primaryKey: true},
    textDescription: {type: DataTypes.STRING(4000)},
    htmlDescription: {type: DataTypes.TEXT('medium')},
    image: {type: DataTypes.BLOB('medium')},
}, {
    sequelize, //Connection name
    modelName: 'productlines' //Table name
});

export default ProductLines;