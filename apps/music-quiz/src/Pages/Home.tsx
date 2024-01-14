import React, { useEffect, useState } from 'react';
import { useHttp } from '../Core/Http/useHttp';

export const Home = () => {
    const { post } = useHttp();
    const code = new URLSearchParams(window.location.search).get('code');
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();

    const login = () => {
        post(`${process.env.REACT_APP_BASE_URL}/login`, {
            code,
        })
            .then((res) => {
                setAccessToken(res.data.access_token);
                setRefreshToken(res.data.refresh_token);
            })
            .catch((e) => console.log(e));
    };

    useEffect(() => {
        login();
    }, [code]);

    return (
        <div>
            {code && code}

            {accessToken && accessToken}
        </div>
    );
};
