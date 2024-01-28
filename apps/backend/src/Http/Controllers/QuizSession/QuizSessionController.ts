import { Request, Response } from 'express';
import { body, param } from 'express-validator';
import { toArray } from '../../../MusicQuiz/Helpers/Helpers';
import Auth from '../../../Core/Authentication/Auth';
import { QuizzesEnum } from '../../../MusicQuiz/Quiz/QuizzesEnum';
import QuizSessionService from '../../../MusicQuiz/Sessions/QuizSessions/QuizSessionService';
import asyncHandler from 'express-async-handler';
import { created, success } from '../../Helpers/ResponseHelpers';
import { QuestionsBuilder } from '../../../MusicQuiz/Sessions/Questions/QuestionsBuilder';

export const ShowValidation = [
    param('id')
        .exists()
        .isNumeric()
        .not()
        .isEmpty()
        .withMessage('ID not provided'),
];

export const UpdateValidation = [
    param('id', 'MusicQuiz session ID is not provided.').exists().isNumeric(),
    body('status').optional().isString(),
    body('config.playlist_id', 'Playlist ID is not provided.')
        .exists()
        .isString(),
    // body('config.number_of_tracks', 'Number of tracks is not provided.').exists().isNumeric(),
    // body('config.guessable_type.', 'Guessable quiz type is not provided.').exists().isString(),
];

export const CreateValidation = [
    body('type')
        .exists()
        .isIn(toArray(QuizzesEnum))
        .withMessage('Type is not one of: ' + toArray(QuizzesEnum).toString()),
];

export const Show = asyncHandler(async (req: Request, res: Response) => {
    const session = await QuizSessionService.findSession(Number(req.params.id));

    success(session, res);
});

export const Update = asyncHandler(async (req: Request, res: Response) => {
    const data = {
        config: req.body.config,
    };

    if (req.body.status) {
        data['status'] = req.body.status;
    }

    const updatedSession = await QuizSessionService.update(
        Number(req.params.id),
        data
    );

    success(updatedSession, res);
});

export const Create = asyncHandler(async (req: Request, res: Response) => {
    const user = await Auth.decodeToken(req);
    const session = await QuizSessionService.createSession(
        user,
        req.body.type,
        req.body.config
    );

    QuestionsBuilder.build(session);

    created(session, res);
});
