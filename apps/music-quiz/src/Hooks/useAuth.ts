import { useHttp } from './useHttp';
import useRouting from './useRouting';

export const useAuth = () => {
    const http = useHttp();
    const { navigate } = useRouting();
    const url = new URLSearchParams(window.location.search);

    const login = () => {
        if (url.get('code') && !token) {
            http.post(`auth/login`, { code: url.get('code') })
                .then((res) => {
                    setToken(res.data.data.token);
                    navigate('/home');
                })
                .catch((error) => console.log(error.request));
        }
    };

    const token = localStorage.getItem('token');
    const setToken = (token: string) => localStorage.setItem('token', token);
    const clearToken = () => localStorage.removeItem('token');

    return { login, token, clearToken };
};
