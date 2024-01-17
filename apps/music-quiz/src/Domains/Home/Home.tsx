import React, { useEffect, useState } from 'react';
import { PageContainer } from '../../Layout/Page/PageContainer';
import { HomeCard } from '../../Components/Ui/Cards/HomeCard';
import { useHttp } from '../../Hooks/useHttp';
import { HomeCardType } from '../../../../../lib/Types/Domains/Home/Types';
import { useAuth } from '../../Hooks/useAuth';

export const Home = () => {
    const http = useHttp();
    const [data, setData] = useState(null as any);
    const { login } = useAuth();

    useEffect(() => {
        login();
    }, []);

    useEffect(() => {
        http.get('quiz')
            .then((res) => setData(res.data.data))
            .catch((err) => console.log(err.response?.data?.data));
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <PageContainer>
            {data.map((quiz: HomeCardType) => (
                <HomeCard key={quiz.id} {...quiz} />
            ))}
        </PageContainer>
    );
};
