import { Router } from 'express';
import * as controller from '../controllers/ProductLinesController';
import { ProductLinesCreateValidation, ProductLinesUpdateValidation } from '../validations/ProductLinesValidation';

const router = Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getByID);
router.post('/', ProductLinesCreateValidation, controller.create);
router.put('/:id', ProductLinesUpdateValidation, controller.updateByID);
router.delete('/:id', controller.deleteByID);

export default router;