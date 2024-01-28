import Spotify from '../../../Spotify/Spotify';

export const Builder = {
    user: null as any,
    sessionConfig: null as any,

    init: (user: any) => {
        Builder.user = user;
        Builder.sessionConfig = user.quizzes[0].config;

        return Builder;
    },

    build: async () => {
        const { playlist } = await Spotify.fetchPlaylist(
            Builder.user,
            Builder.sessionConfig.playlist_id
        );

        return playlist;

        /*
populate redis with =
session_id:
[
{
id: '',
title: '',
artist: '',
image: '',
},
{
id: '',
title: '',
artist: '',
image: '',
},
]
*/
    },
};
