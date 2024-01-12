import React, { useEffect, useState } from 'react';
import { PageContainer } from '../../Layout/Page/PageContainer';
import { HomeCard } from '../../Components/Ui/Cards/HomeCard';
import { useHttp } from '../../Hooks/useHttp';
import { HomeCardType } from '../../../../../lib/Types/Domains/Home/Types';

export const Home = () => {
    const http = useHttp();
    const url = new URLSearchParams(window.location.search);
    const [data, setData] = useState(null as any);

    useEffect(() => {
        http.post(`login`, { code: url.get('code') })
            .then((res) => {
                localStorage.setItem('token', res.data.access_token);
                url.delete('code');
            })
            .catch((error) => {
                console.log(error.request);
            });
    }, [url.get('code')]);

    useEffect(() => {
        http.get('quiz').then((res) => setData(res.data.data));
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
