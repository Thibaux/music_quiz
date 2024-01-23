import { useState } from 'react';
import { useHttp } from '../../../Hooks/useHttp';

type Props = {
    session: any;
};

export const Options = (props: Props) => {
    const { session } = props;
    const http = useHttp();
    const [data, setData] = useState(null as any);

    console.log(session);

    // useEffect(() => {
    //     http.get(`questions/${questionId}/options`).then((res) => setData(res.data.data));
    // }, []);

    if (!data) return null;

    return (
        <div className={'flex'}>
            {session.options.map((option: any) => (
                <div>{option.id}</div>
            ))}
        </div>
    );
};
