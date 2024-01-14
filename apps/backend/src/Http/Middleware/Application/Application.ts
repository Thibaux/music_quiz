import express, { Application } from 'express';
import cors from 'cors';

const oneDay = 1000 * 60 * 60 * 24;
const secretKey = 'music_quiz_very_secret';

export const ApplicationMiddleware = (app: Application) => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(
        cors({
            origin: '*',
        })
    );
};
