import React, {useEffect, useState} from "react";
import axios from "axios";
import {useAuth} from "./Hooks/useAuth";

export const Start = () => {
	const {token} = useAuth({});
	const [data, setData] = useState(null as any);

	useEffect(() => {
		if (token) {
			axios.get(`http://localhost:3000/artist`, {
				headers: {
					token: token,
				},
				params: {
					search: 'Stan',
				}
			})
				.then(res => setData(res.data.data))
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
			{data.items.map((artist: any) => (
				<div key={artist.id}>
					{artist.name}
				</div>
				))}
		</div>
	);
}