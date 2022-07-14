import {connectDatabase} from './sequelize';

import Customers from './models/CustomersModel';
import Orders from './models/OrdersModel'
import OrderDet from './models/OrderDetModel';
import Payments from './models/PaymentsModel';
import Employees from './models/EmployeesModel';
import Offices from './models/OfficesModel';
import Products from './models/ProductsModel';
import ProductLines from './models/ProductLinesModel';

export const initdb = async () => {
    Promise.all([
        await connectDatabase(),
        console.log('Syncronizing tables.'),
        await Customers.sync({alter: true}),
        await Employees.sync({alter: true}),
        await Offices.sync({alter: true}),
        await OrderDet.sync({alter: true}),
        await Orders.sync({alter: true}),
        await Payments.sync({alter: true}),
        await ProductLines.sync({alter: true}),
        await Products.sync({alter: true})
    ]).then(() => {
        console.log('Tables syncronized successfully.');
    });    
};