import express from 'express';
import Router from './Http/Routes/Router';
import { AuthenticationMiddleware } from './Http/Middleware/Authentication/Authentication';
import PublicRouter from './Http/Routes/PublicRouter';
import { ApplicationMiddleware } from './Http/Middleware/Application/Application';

const app = express();

ApplicationMiddleware(app);

app.use(PublicRouter);
app.use(AuthenticationMiddleware);
app.use(Router);

app.listen(Number(process.env.PORT));
