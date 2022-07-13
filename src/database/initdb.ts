import Orders from './models/OrdersModel'

export const inidb = () => {
    Orders.sync({alter: true});
};