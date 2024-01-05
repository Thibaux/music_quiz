import React, { useEffect, useState } from 'react';
import { PageContainer } from '../../Layout/Page/PageContainer';
import { useHttp } from '../../Hooks/useHttp';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
    const navigate = useNavigate();
    const [data, setData] = useState(null as any);
    const http = useHttp();

    useEffect(() => {
        http.get('http://localhost:3000/quizzes').then((res) => setData(res.data));
    }, []);

    const handleQuizClick = () => navigate('/start');

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <PageContainer>
            {/*{data.quizzes.map((quiz: any) => (*/}
            {/*    <HomeCard onClick={handleQuizClick} text={''} image={''} />*/}
            {/*))}*/}
        </PageContainer>
    );
};
