import React, {useEffect, useState} from "react";
import axios from "axios";
import {useHttp} from "./useHttp";
import {useAuth} from "./Hooks/useAuth";

export const Start = () => {
	const {token} = useAuth({});
	const http = useHttp();
	const [data, setData] = useState(null as any);

	useEffect(() => {
		if (token) {
			axios.get(`http://localhost:3000/beatles?token=${token}`)
				.then(res => setData(res.data.body))
				.catch((e) => {
					console.log(e);
				})
		}
	}, []);

	if (!data) {
		return null;
	}

	return (
		<div>
			{data.artists.items.map((artist: any) => (
				<div key={artist.id}>
					{artist.uri}
				</div>
				))}
		</div>
	);
}