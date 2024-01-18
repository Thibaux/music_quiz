import React, { useEffect } from 'react';
import { PageContainer } from '../../Layout/Page/PageContainer';
import { Card } from '../../Components/Ui/Cards/Card';
import recordsImage from '../../Assets/images/records.jpg';
import { useAuth } from '../../Hooks/useAuth';

export const Login = () => {
    const { clearToken } = useAuth();
    const url = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&state=1234567890&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state&show_dialog=true`;
    const handleClick = () => (window.location.href = url);

    useEffect(() => {
        clearToken();
    }, []);

    return (
        <PageContainer>
            <Card
                text={'Log in with Spotify to get started'}
                image={recordsImage}
                onClick={handleClick}
            />
        </PageContainer>
    );
};
