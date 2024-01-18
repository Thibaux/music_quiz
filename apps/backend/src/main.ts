import express from 'express';
import Router from './Http/Routes/Router';
import { AuthenticationMiddleware } from './Http/Middleware/Authentication/Authentication';
import PublicRouter from './Http/Routes/PublicRouter';
import { ApplicationMiddleware } from './Http/Middleware/Application/Application';
import { ErrorHandler } from './Http/Middleware/Error/ErrorHandler';

const app = express();

ApplicationMiddleware(app);

app.use(PublicRouter);
app.use(AuthenticationMiddleware);

app.use(Router);
app.use(ErrorHandler);

app.listen(Number(process.env.PORT));
