import React from 'react';

export const Login = () => {
    const scopes =
        'streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';
    const url = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=${scopes}&show_dialog=true`;

    return (
        <div>
            <div onClick={() => (window.location.href = url)}>
                <button>click hrere</button>
            </div>
            bitches
        </div>
    );
};
