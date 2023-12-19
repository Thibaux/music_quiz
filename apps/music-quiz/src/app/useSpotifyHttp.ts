import axios from "axios";
import stringify from "query-string"
import {useAuth} from "./Hooks/useAuth";

export const useSpotifyHttp = () => {
	const get = (url: string, payload: any = {}, config: any = {}, transformResponse?: any) => {
		return request("GET", url, payload);
	};

	const post = (url: string, payload: any = {}, config: any = {}, transformResponse?: any) => {
		return request("POST", url, payload);
	};

	const put = (url: string, payload: any = {}, config: any = {}, transformResponse?: any) => {
		return request("PUT", url, payload);
	};

	return {get, put, post}
}

const request = (method: string, url: string, payload: any) => {
	const {token} = useAuth({});

	const instance = axios.create({
		baseURL: 'https://api.spotify.com/v1/',
		headers: {
			Authorization: `Bearer ${token}`,
			"X-Account-Id": localStorage.getItem("currentAccountId"),
			"Time-Zone": Intl.DateTimeFormat().resolvedOptions().timeZone,
		},
	});

	return instance.request({
		url: url.replace(/\/$/, ""),
		method,
		params: method == "GET" ? payload : {},
		paramsSerializer: (params) =>
			stringify.stringify(params, {
				arrayFormat: "bracket",
				skipEmptyString: true,
			}),
		data: payload,
	});
}