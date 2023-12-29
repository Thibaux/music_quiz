import React, {useEffect, useState} from "react";
import axios from "axios";

export const Playlists = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		axios.get(`https://api.spotify.com/v1/`)
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