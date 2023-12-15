import React from "react";

export const Login = () => {
	// const [token, setToken] = useState(null);

	const clientId = "331d502b9fb242c8b7a1cb8b2ae23f98";
	const redirectUrl = "http://localhost:4200/home";

	const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUrl}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

	return (
		<div>
			<a href={url}>
				<button>click hrere</button>
			</a>
			bitches
		</div>
	)
}