import { useEffect, useState } from 'react';
import { useHttp } from '../../Hooks/useHttp';
import { PageContainer } from '../../Layout/Page/PageContainer';
import { Options } from './Options/Options';
import { getSessionId } from '../../Core/Helpers/Helpers';

export const SessionOverview = () => {
    const http = useHttp();
    const [data, setData] = useState(null as any);
    const id = getSessionId();

    useEffect(() => {
        http.get(`quiz-sessions/${id}`).then((res) => setData(res.data.data));
    }, []);

    if (!data) return null;

    return (
        <PageContainer>
            <Options session={data} />
        </PageContainer>
    );
};
