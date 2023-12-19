import React from "react";

export const Login = () => {
	const clientId = "331d502b9fb242c8b7a1cb8b2ae23f98";
	const redirectUrl = "http://localhost:4200/home";
	const scopes = "streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
	const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUrl}&scope=${scopes}&show_dialog=true`;


	return (
		<div>
			<div onClick={() => window.location.href = url}>
				<button>click hrere</button>
			</div>
			bitches
		</div>
	)
}