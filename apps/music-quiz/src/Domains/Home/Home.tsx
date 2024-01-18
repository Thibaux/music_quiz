import React, { useEffect, useState } from 'react';
import { PageContainer } from '../../Layout/Page/PageContainer';
import { HomeCard } from './Components/HomeCard';
import { useHttp } from '../../Hooks/useHttp';
import { HomeCardType } from '../../../../../lib/Types/Domains/Home/Types';
import { useAuth } from '../../Hooks/useAuth';

export const Home = () => {
    const http = useHttp();
    const { login } = useAuth();
    const [data, setData] = useState(null as any);

    useEffect(() => {
        login();
    }, []);

    useEffect(() => {
        http.get('quiz')
            .then((res) => setData(res.data.data))
            .catch((err) => console.log(err.response?.data?.data));
    }, []);

    return (
        <PageContainer>
            {!data && <div>Loading...</div>}

            {data &&
                data.map((quiz: HomeCardType) => (
                    <div key={quiz.id} className={'sm:w-96 w-10/12 h-auto'}>
                        <HomeCard {...quiz} />
                    </div>
                ))}
        </PageContainer>
    );
};
