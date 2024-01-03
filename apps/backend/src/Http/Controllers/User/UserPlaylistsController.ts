import { Request, Response } from "express";
import axios from "axios";

export const Index = async (req: Request, res: Response) => {
	const {authorization} = req.headers;

	if (!authorization) {
		throw new Error('Token not provided.');
	}

	axios.get('https://api.spotify.com/v1/me/playlists', {
		headers: {authorization},
	})
		.then((response) => {
			console.log(res);

			res.json({data: response.data});
		})
		.catch((e) => {
			console.log(e);
		});
};
