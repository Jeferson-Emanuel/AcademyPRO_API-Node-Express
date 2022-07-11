import { Router } from 'express';
import * as controller from '../controllers/OfficesController';
import { OfficesCreateValidation, OfficesUpdateValidation } from '../validations/OfficesValidation';

const router = Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getByID);
router.post('/', OfficesCreateValidation, controller.create);
router.put('/:id', OfficesUpdateValidation, controller.updateByID);
router.delete('/:id', controller.deleteByID);

export default router;