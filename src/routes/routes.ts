import { Router, Request, Response } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.get('/', (req: Request, res: Response) => res.json({ message: 'List of users' }));
router.post('/users', UserController.create);

export default router;
