import { Router } from 'express';
import * as controller from '../controllers/OrdersController';
import { OrdersCreateValidation, OrdersUpdateValidation } from '../validations/OrdersValidation';

const router = Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getByID);
router.post('/', OrdersCreateValidation, controller.create);
router.put('/:id', OrdersUpdateValidation, controller.updateByID);
router.delete('/:id', controller.deleteByID);

export default router;