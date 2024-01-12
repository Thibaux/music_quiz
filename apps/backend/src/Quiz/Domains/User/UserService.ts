import { SpotifyClient } from '../../../Core/Http/SpotifyClient';

export const UserService = () => {
    const createUser = async (spotifyUser: any) => {
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

        // await prisma.users.create({
        //     data: profile,
        // });
    };

    return { createUser };
};
