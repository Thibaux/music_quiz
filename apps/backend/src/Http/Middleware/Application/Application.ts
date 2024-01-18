import express, { Application } from 'express';
import cors from 'cors';

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
