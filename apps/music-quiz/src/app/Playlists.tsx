import React, {useEffect, useState} from "react";
import {useSpotifyHttp} from "./useSpotifyHttp";

export const Playlists = () => {
	const http = useSpotifyHttp();
	const [data, setData] = useState(null);

	useEffect(() => {
		http.get('users/')
			.then(res => setData(res.data))
	}, [])

	if (!data) {
		return null;
	}

	console.log(data);

	return (
		<div>
		</div>
	);
}