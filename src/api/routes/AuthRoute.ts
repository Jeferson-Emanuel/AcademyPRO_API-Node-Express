import { Router } from 'express';
import * as controller from '../controllers/AuthController';

const router = Router();

router.post('/signup', controller.signUp);

export default router;