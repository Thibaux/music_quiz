import { prisma } from '../../Core/Prisma/Prisma';
import { QuizStatus } from '../Sessions/QuizSessions/Status';

export const UserService = {
    find: async (userId: number) => {
        const user = await prisma.users.findUnique({
            where: { id: userId },
            include: {
                quizzes: {
                    where: {
                        status: QuizStatus.PENDING || QuizStatus.STARTED,
                    },
                },
            },
        });

        if (!user) {
            throw Error('User not found');
        }

        return user;
    },

    findByEmail: async (data: any) => {
        const userExists = await prisma.users.findUnique({
            where: {
                email: data.email,
            },
        });

        if (userExists) {
            return userExists;
        }

        return null;
    },

    create: async (data: any) => {
        let profile = {
            email: data.email,
            spotify_id: data.id,
            spotify_token: data.spotify_token,
            spotify_url: data.external_urls.spotify,
        };

        if (typeof data.display_name === 'string') {
            profile['name'] = data.display_name;
        }

        if (data.images.length) {
            profile['avatar'] = data.images.slice(-1)[0].url;
        }

        const user = prisma.users.create({
            data: { ...profile },
        });

        if (!user) {
            throw Error('User could not be created');
        }

        return user;
    },

    update: async (user: any, data: any) => {
        const result = await prisma.users.update({
            where: { id: user.id },
            data: { spotify_token: data.spotify_token },
        });

        if (!result) {
            throw Error('User could not be updated');
        }

        return result;
    },
};
