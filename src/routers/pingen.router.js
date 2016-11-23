import express from 'express';
import * as pingenController from '../controllers/pingen.controller';

const router = express.Router();

router.post('/', pingenController.register);

export default router;
