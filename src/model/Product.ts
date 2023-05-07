import {Model, DataTypes, Sequelize, CreationOptional} from 'sequelize';

import db from '../config/database.config';

interface ProductAttributes{
    productId: CreationOptional<number>,
    productQuantity: CreationOptional<number>,
    productState: String,
    productName: String,
    // id: String
}

export class ProductInstance extends Model<ProductAttributes>{}

// foreigen key from Farm
// Farm.hasOne

// foregien key for the Product

ProductInstance.init(
    {
        productId:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        productQuantity:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        productState:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        productName:{
            type:DataTypes.STRING,
            allowNull: false,
        }
    },{
        sequelize: db,
        tableName: 'product',
    }
);