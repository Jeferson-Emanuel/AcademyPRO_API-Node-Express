import {Router} from 'express';
import { ensureIsAuthenticated } from '../middlewares/AuthMiddleware';
import authentication from './AuthRoute';
import customers from './CustomersRoute';
import employees from './EmployeesRoute';
import offices from './OfficesRoute';
import orderdet from './OrderDetRoute';
import orders from './OrdersRoute';
import payments from './PaymentsRoute';
import productlines from './ProductLinesRoute';
import products from './ProductsRoute';

const routes = Router();

routes.use('/auth', authentication);

routes.use(ensureIsAuthenticated);

routes.use('/customers', customers);
routes.use('/employees', employees);
routes.use('/offices', offices);
routes.use('/orderdet', orderdet);
routes.use('/orders', orders);
routes.use('/payments', payments);
routes.use('/productlines', productlines);
routes.use('/products', products);

export default routes;