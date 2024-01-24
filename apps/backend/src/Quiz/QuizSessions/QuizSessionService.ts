import { randomBytes } from 'crypto';
import { prisma } from '../../Core/Prisma/Prisma';
import { QuizStatus } from './Status';
import ConfigService from './Config/ConfigService';

const QuizSessionService = {
    createSession: async (user: any, type: string, playlist: any) => {
        const data = {
            host_user: { connect: { id: user.id } },
            type: type,
            status: QuizStatus.CREATED,
            hash: QuizSessionService.hashGenerator(),
            config: {
                number_of_tracks: ConfigService.default().number_of_tracks,
                number_of_options: ConfigService.default().number_of_options,
                playlist_id: playlist.id,
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
            throw Error('Quiz session with id: ' + session_id + ' not found');
        }

        return session;
    },

    findSessionByHost: async (user: any) => {
        const session = await prisma.quiz_sessions.findFirst({
            where: { host_id: user.id },
        });

        if (!session) {
            throw Error('Quiz session for user: ' + user.name + ' not found');
        }

        return session;
    },

    updateSession: (session: any) => {
        console.log(session);

        return session;
    },

    hashGenerator: () => {
        return randomBytes(32).toString('base64').slice(0, 5).toUpperCase();
    },
};

export default QuizSessionService;
