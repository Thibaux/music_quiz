import { useNavigate } from 'react-router-dom';

export const useRouting = () => {
    const navigate = useNavigate();

    const replace = (url: string) => {
        return navigate(url, { replace: true });
    };

    return {
        navigate: navigate,
        replace: replace,
    };
};
