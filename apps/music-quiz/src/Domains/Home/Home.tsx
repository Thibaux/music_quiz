import React, { useEffect, useState } from 'react';
import { PageContainer } from '../../Layout/Page/PageContainer';
import { HomeCard } from '../../Components/Ui/Cards/HomeCard';
import { useHttp } from '../../Hooks/useHttp';
import { HomeCardType } from '../../../../../lib/Types/Domains/Home/Types';
import { useAuth } from '../../Hooks/useAuth';

export const Home = () => {
    const http = useHttp();
    const [data, setData] = useState(null as any);
    const { isLoggedIn, login } = useAuth();

    useEffect(() => {
        const logUserIn = async () => {
            await login();
        };

        logUserIn();
        return () => {};
    }, []);

    useEffect(() => {
        if (isLoggedIn()) {
            http.get('quiz').then((res) => setData(res.data.data));
        }
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
