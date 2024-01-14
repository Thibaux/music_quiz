import express from 'express';
import HealthRouter from './Health/Health';
import AuthRouter from './Auth/Auth';

const PublicRouter = express.Router();

PublicRouter.use(HealthRouter);
PublicRouter.use('/auth', AuthRouter);

export default PublicRouter;
