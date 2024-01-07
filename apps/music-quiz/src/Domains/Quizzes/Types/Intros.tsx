import React, { useEffect, useState } from 'react';
import { PageContainer } from '../../../Layout/Page/PageContainer';
import { QuizCard } from '../Components/QuizCard';
import { Title } from '../../../Components/Ui/Typography/Title';
import { useHttp } from '../../../Hooks/useHttp';

export const Intros = () => {
    const http = useHttp();
    const [data, setData] = useState(null as any);

    useEffect(() => {
        http.get('quiz/intros').then((res) => setData(res.data.data));
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <PageContainer>
            <QuizCard>
                <div className={'flex'}>
                    <Title text={'title'}></Title>
                </div>
            </QuizCard>
        </PageContainer>
    );
};
