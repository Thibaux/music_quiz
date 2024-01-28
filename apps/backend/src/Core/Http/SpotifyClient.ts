import axios, { AxiosResponse } from 'axios';

export const SpotifyClient = {
    baseUrl: `https://api.spotify.com/v1/`,
    headers: {
        'Content-Type': 'application/json',
    },

    init: (config: any) => {
        SpotifyClient.headers['Authorization'] = config.spotify_token;

        return SpotifyClient;
    },

    get: async (url: string) => {
        const response = await axios.get(SpotifyClient.baseUrl + url, {
            headers: SpotifyClient.headers,
        });

        return SpotifyClient.returnResponse(response);
    },

    post: async (url: string, payload: any = {}) => {
        const response = await axios.post(
            SpotifyClient.baseUrl + url,
            payload,
            {
                headers: SpotifyClient.headers,
            }
        );
        return SpotifyClient.returnResponse(response);
    },

    put: async (url: string, payload: any = {}) => {
        const response = await axios.put(SpotifyClient.baseUrl + url, payload, {
            headers: SpotifyClient.headers,
        });
        return SpotifyClient.returnResponse(response);
    },

    returnResponse: (response: AxiosResponse) => {
        if (response.status !== 200) {
            throw Error(response.data.message);
        }

        return response.data;
    },
};
