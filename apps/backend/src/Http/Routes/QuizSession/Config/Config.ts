import express from 'express';
import { Index, IndexValidation } from '../../../Controllers/QuizSession/Config/ConfigController';
import { validate } from '../../../Validation/Validation';

const ConfigRouter = express.Router();

ConfigRouter.get('/config', validate([IndexValidation]), Index);

export default ConfigRouter;
