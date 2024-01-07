import axios from 'axios';
import { Auth } from '../Authentication/TokenDto';

export const SpotifyClient = () => {
    const baseUrl = `https://api.spotify.com/v1/`;
    const headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Auth.tokenDTO.access_token,
    };

    const get = (url: string) => {
        return axios.get(baseUrl + url, { headers });
    };

    const post = (url: string, payload: any = {}) => {
        return axios.post(baseUrl + url, payload, { headers });
    };

    const put = (url: string, payload: any = {}) => {
        return axios.put(baseUrl + url, payload, { headers });
    };

    return { get, put, post };
};
