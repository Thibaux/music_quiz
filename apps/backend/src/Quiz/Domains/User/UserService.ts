import prisma from '../../../Core/Prisma/Prisma';

export const UserService = () => {
    const createUser = async () => {
        const spotifyUser = {
            email: '',
        };

        const quiz = await prisma.users.create({
            data: {
                email: spotifyUser.email,
                // first_name: spotifyUser.first_name,
                // last_name: spotifyUser.last_name,
            },
        });
    };
};
