import { randomBytes } from 'crypto';
import { prisma } from '../../../Core/Prisma/Prisma';
import { QuizStatus } from './Status';
import ConfigService from './Config/ConfigService';

const QuizSessionService = {
    createSession: async (user: any, type: string, config: any) => {
        const data = {
            host_user: { connect: { id: user.id } },
            type: type,
            status: QuizStatus.PENDING,
            hash: QuizSessionService.hashGenerator(),
            config: {
                number_of_tracks: ConfigService.default().number_of_tracks,
                number_of_options: ConfigService.default().number_of_options,
                playlist_id: config.playlist_id,
            },
        };

        const quiz = await prisma.quiz_sessions.create({ data: data });

        if (!quiz) {
            throw Error('Could not create quiz.');
        }

        return quiz;
    },

    findSession: async (session_id: number) => {
        const session = await prisma.quiz_sessions.findUnique({
            where: { id: session_id },
        });

        if (!session) {
            throw Error(
                'MusicQuiz session with id: ' + session_id + ' not found'
            );
        }

        return session;
    },

    findActiveSessionByHost: async (user: any) => {
        const session = await prisma.quiz_sessions.findFirst({
            where: {
                host_id: user.id,
                status: QuizStatus.STARTED,
            },
        });

        if (!session) {
            throw Error(
                'MusicQuiz session for user: ' + user.name + ' not found'
            );
        }

        return session;
    },

    update: async (sessionId: number, data: any) => {
        const result = await prisma.quiz_sessions.update({
            where: { id: sessionId },
            data: data,
        });

        if (result.id !== sessionId) {
            throw Error('Could not update session with id ' + sessionId);
        }

        return result;
    },

    hashGenerator: () => {
        return randomBytes(32).toString('base64').slice(0, 5).toUpperCase();
    },
};

export default QuizSessionService;
