import { Router } from 'express';
import * as controller from '../controllers/OrderDetController';
import { OrderDetCreateValidation, OrderDetUpdateValidation } from '../validations/OrderDetValidation';

const router = Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getByID);
router.post('/', OrderDetCreateValidation, controller.create);
router.put('/:id', OrderDetUpdateValidation, controller.updateByID);
router.delete('/:id', controller.deleteByID);

export default router;