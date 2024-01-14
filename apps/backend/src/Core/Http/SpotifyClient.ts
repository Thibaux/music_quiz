import axios from 'axios';
import { serializeToken } from '../../Quiz/Helpers/Helpers';
import { SpotifyAuth } from '../Authentication/SpotifyAuth';

export const SpotifyClient = () => {
    const baseUrl = `https://api.spotify.com/v1/`;
    const headers = {
        'Content-Type': 'application/json',
        Authorization: serializeToken(SpotifyAuth.user.access_token),
    };

    const get = async (url: string) => {
        return await axios.get(baseUrl + url, { headers });
    };

    const post = (url: string, payload: any = {}) => {
        return axios.post(baseUrl + url, payload, { headers });
    };

    const put = (url: string, payload: any = {}) => {
        return axios.put(baseUrl + url, payload, { headers });
    };

    return { get, put, post };
};
