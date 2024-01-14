type Type = {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
};

const Spotify = {
    auth: {} as Type,
};

export default Spotify;
