import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { PageContainer } from '../../Layout/Page/PageContainer';
import { HomeCard } from '../../Components/Ui/Cards/HomeCard';
import { useHttp } from '../../Hooks/useHttp';

export const Home = () => {
    const navigate = useNavigate();
    const http = useHttp();
    const code = new URLSearchParams(window.location.search).get('code');
    const [data, setData] = useState(null as any);

    useEffect(() => {
        axios.post('http://localhost:3000/login', { code }).then((res) => {
            localStorage.setItem('token', res.data.access_token);
        });
    }, [code]);

    useEffect(() => {
        http.get('http://localhost:3000/quizzes').then((res) => setData(res.data));
    }, []);

    const handleQuizClick = () => navigate('/start');

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <PageContainer>
            {data.quizzes.map((quiz: any) => (
                <HomeCard onClick={handleQuizClick} text={''} image={''} />
            ))}
        </PageContainer>
    );
};
