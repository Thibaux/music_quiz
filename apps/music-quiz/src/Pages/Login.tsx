import React from "react";

export const Login = () => {
  // const [token, setToken] = useState(null);

  const url = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

  return (
    <div>
      <a href={url}>
        <button>click hrere</button>
      </a>
      bitches
    </div>
  )
}
