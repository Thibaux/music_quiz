import { randomBytes } from 'crypto';
import { prisma } from '../../Core/Prisma/Prisma';

const QuizSessionService = {
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
