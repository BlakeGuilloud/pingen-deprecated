import express from 'express';
import * as pingenController from '../controllers/pingen.controller';

const router = express.Router();

router.post('/', pingenController.register);
router.post('/requestPin', pingenController.requestPin);
router.post('/verify', pingenController.verify);

export default router;
