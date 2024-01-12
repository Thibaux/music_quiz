import React, { useEffect, useState } from 'react';
import { PageContainer } from '../../../Layout/Page/PageContainer';
import { QuizCard } from '../Components/QuizCard';
import { Title } from '../../../Components/Ui/Typography/Title';
import { useHttp } from '../../../Hooks/useHttp';
import { QuizzesEnum } from '../../../../../backend/src/Quiz/Domains/Quiz/QuizzesEnum';

export const Intros = () => {
    const http = useHttp();
    const [data, setData] = useState(null as any);

    useEffect(() => {
        http.post(`quiz-session/${QuizzesEnum.INTROS}`).then((res) => console.log(res.data));
    }, []);

    useEffect(() => {
        http.get(`quiz/${QuizzesEnum.INTROS}`).then((res) => setData(res.data.data));
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
