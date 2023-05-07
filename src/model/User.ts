import {Model, DataTypes, Sequelize} from 'sequelize';

import db from '../config/database.config';

interface UserAttributes{
    email: String,
    password: String,
    // id: String
}

export class UserInstance extends Model<UserAttributes>{}



UserInstance.init(
    {
        email:{
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        // id:{
        //     type: DataTypes.UUID,
        //     defaultValue: DataTypes.UUIDV4,
        //     allowNull: false,
        // }
    },{
        sequelize: db,
        tableName: 'user',
    }
);