import { Router } from 'express';
import * as controller from '../controllers/EmployeesController';
import { EmployeesCreateValidation, EmployeesUpdateValidation } from '../validations/EmployeesValidation';

const router = Router();

router.get('/', controller.getAll);
router.get('/nested', controller.getAllNested);
router.get('/reports', controller.getAllReports);
router.get('/:id', controller.getByID);
router.post('/', EmployeesCreateValidation, controller.create);
router.put('/:id', EmployeesUpdateValidation, controller.updateByID);
router.delete('/:id', controller.deleteByID);

export default router;