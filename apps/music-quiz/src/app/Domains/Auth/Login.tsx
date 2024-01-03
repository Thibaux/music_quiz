import React from 'react';
import { Card } from '../../Components/Card';

export const Login = () => {
    const url = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&state=1234567890&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state&show_dialog=true`;

    return (
        <div className={'flex flex-col w-full h-full items-center justify-start gap-20 mt-40'}>
            <div className={'text-3xl bg-amber-800'}>hi</div>
            <Card />
        </div>
    );
};
