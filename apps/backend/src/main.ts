import express from 'express';
import cors from 'cors';
import Router from './Http/Routes/Router';
import { Middleware } from './Http/Middleware/Middleware';

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: '*',
    })
);

app.use(Middleware);
app.use(Router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
