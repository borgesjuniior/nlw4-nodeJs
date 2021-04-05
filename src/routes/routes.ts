import { Router, Request, Response } from 'express';
import SurveysController from '../controllers/SurveysController';
import UserController from '../controllers/UserController';

const router = Router();

router.get('/', (req: Request, res: Response) => res.json({ message: 'List of users' }));
router.post('/users', UserController.create);

router.get('/surveys', SurveysController.index);
router.post('/surveys', SurveysController.create);

export default router;
