import { useHttp } from './useHttp';

export const useAuth = () => {
    const http = useHttp();
    const url = new URLSearchParams(window.location.search);
    const token = localStorage.getItem('token');

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

    return { token, login };
};
