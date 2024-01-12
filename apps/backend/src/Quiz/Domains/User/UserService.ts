import { SpotifyClient } from '../../../Core/Http/SpotifyClient';
import { prisma } from '../../../Core/Prisma/Prisma';

export const UserService = () => {
    const findOrCreate = async () => {
        const { data } = await SpotifyClient().get(`me`);

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

        const userExists = await prisma.users.findUnique({
            where: {
                email: data.email,
            },
        });

        if (userExists) {
            return userExists;
        }

        return prisma.users.create({
            data: { ...profile },
        });
    };

    return { findOrCreate };
};