import express from 'express';
import { Update, UpdateValidation } from '../../../Controllers/QuizSession/Config/ConfigController';
import { validate } from '../../../Validation/Validation';

const ConfigRouter = express.Router();

ConfigRouter.get('/config', validate([UpdateValidation]), Update);

export default ConfigRouter;
