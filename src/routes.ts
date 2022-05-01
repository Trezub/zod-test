import { Router } from 'express';
import { validateRequest } from 'zod-express-middleware';
import userController from './controllers/userController';
import { createUser } from './validators/userValidators';

const router = Router();

router.post('/users', validateRequest(createUser), userController.createUser);

export default router;