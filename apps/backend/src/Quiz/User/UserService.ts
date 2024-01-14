import { prisma } from '../../Core/Prisma/Prisma';

export const UserService = () => {
    const findOrCreate = async (data: any) => {
        const userExists = await prisma.users.findUnique({
            where: {
                email: data.email,
            },
        });

        if (userExists) {
            return userExists;
        }

        let profile = {
            email: data.email,
            spotify_id: data.id,
            spotify_url: data.external_urls.spotify,
        };

        if (typeof data.display_name === 'string') {
            profile['name'] = data.display_name;
        }

        if (data.images.length) {
            profile['avatar'] = data.images.slice(-1)[0].url;
        }

        return prisma.users.create({
            data: { ...profile },
        });
    };

    return { findOrCreate };
};
