import { Router } from 'express';
import * as controller from '../controllers/ProductsController';
import { ProductsCreateValidation, ProductsUpdateValidation } from '../validations/ProductsValidation';

const router = Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getByID);
router.post('/', ProductsCreateValidation, controller.create);
router.put('/:id', ProductsUpdateValidation, controller.updateByID);
router.delete('/:id', controller.deleteByID);

export default router;