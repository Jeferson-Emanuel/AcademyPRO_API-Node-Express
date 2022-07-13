import { Router } from 'express';
import * as controller from '../controllers/CustomersController';
import { CustomersCreateValidation, CustomersUpdateValidation } from '../validations/CustomersValidation';

const router = Router();

router.get('/', controller.getAll);
router.get('/nested', controller.getAllNested);
router.get('/:id', controller.getByID);
router.post('/', CustomersCreateValidation, controller.create);
router.put('/:id', CustomersUpdateValidation, controller.updateByID);
router.delete('/:id', controller.deleteByID);

export default router;