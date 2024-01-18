import axios, { AxiosResponse } from 'axios';
import { serializeToken } from '../../Quiz/Helpers/Helpers';
import { SpotifyAuth } from '../Authentication/SpotifyAuth';

export const SpotifyClient = () => {
    const baseUrl = `https://api.spotify.com/v1/`;
    const headers = {
        'Content-Type': 'application/json',
        Authorization: serializeToken(SpotifyAuth.user.access_token),
    };

    const get = async (url: string): Promise<AxiosResponse> => {
        const response = await axios.get(baseUrl + url, { headers });
        return returnResponse(response);
    };

    const post = async (url: string, payload: any = {}) => {
        const response = await axios.post(baseUrl + url, payload, { headers });
        return returnResponse(response);
    };

    const put = async (url: string, payload: any = {}) => {
        const response = await axios.put(baseUrl + url, payload, { headers });
        return returnResponse(response);
    };

    const returnResponse = (response: AxiosResponse) => {
        if (response.status !== 200) {
            throw Error(response.data.message);
        }

        return response;
    };

    return { get, put, post };
};
