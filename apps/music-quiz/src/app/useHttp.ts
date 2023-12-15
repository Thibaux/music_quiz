import axios from "axios";
import stringify from "query-string"

export const useHttp = () => {
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

const request = (url: string, method: string, payload: any) => {
	const instance = axios.create({
		baseURL: process.env.REACT_APP_BASE_URL,
		headers: {
			Authorization: `Bearer ${localStorage.get("token")}`,
			"X-Account-Id": localStorage.get("currentAccountId"),
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