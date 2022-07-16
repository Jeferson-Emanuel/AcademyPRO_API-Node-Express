import {Error} from 'sequelize';
import {Sequelize} from 'sequelize';

export const sequelize = new Sequelize('classicmodels', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        freezeTableName: true,
        //timestamps: false
        createdAt: false,
        updatedAt: false
    },
    logging: false,
    /* dialectOptions: {//Change format of date handling        
        useUTC: false,
        dateStrings: true,
        typeCast: true
    }, */
    timezone: '-03:00'
});

export const connectDatabase = async () => {
    await sequelize.authenticate().then(() => {
        console.log('Database connected successfully.');
    }).catch((error: Error) => {
        console.log(`Connection error: ${error}`);
    });
};

export default sequelize;