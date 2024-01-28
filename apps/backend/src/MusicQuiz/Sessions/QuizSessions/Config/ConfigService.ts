import { GuessableTypes } from '../../../Guessables/GuessableTypes';

const ConfigService = {
    default: () => {
        return {
            number_of_tracks: 9,
            number_of_options: 4,
            guessable_type: GuessableTypes.SONGS,
            playlist_id: '4BmIp9LV6bjaygjrUdJc0n', // veronica playlist
        };
    },
};

export default ConfigService;
