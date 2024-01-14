import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHttp } from './useHttp';

export const useAuth = () => {
    const http = useHttp();
    const url = new URLSearchParams(window.location.search);
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!refreshToken || !expiresIn) return;

        const interval = setInterval(() => {
            axios
                .post('http://localhost:3001/refresh', {
                    refreshToken,
                })
                .then((res) => {
                    setAccessToken(res.data.accessToken);
                    setExpiresIn(res.data.expiresIn);
                })
                .catch(() => {
                    window.location.replace('/');
                });
        }, (expiresIn - 60) * 1000);

        return () => clearInterval(interval);
    }, [refreshToken, expiresIn]);

    const isLoggedIn = () => localStorage.getItem('token');

    const login = async () => {
        if (url.get('code')) {
            http.post(`auth/login`, { code: url.get('code') })
                .then((res) => {
                    localStorage.setItem('token', res.data.data.token);
                    url.delete('code');
                })
                .catch((error) => {
                    console.log(error.request);
                });
        }
    };

    return { token, isLoggedIn, login };
};
