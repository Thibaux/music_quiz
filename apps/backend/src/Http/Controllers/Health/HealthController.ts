import { Request, Response } from "express";

export const Show = async (req: Request, res: Response) => {
	const body = {
		status: 'Healthy',
	};

	res.json(body);
};