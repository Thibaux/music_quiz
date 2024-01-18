import { Button, Modal } from '@mantine/core';
import { Title } from '../../../Components/Ui/Typography/Title';
import React, { useEffect, useState } from 'react';
import { useHttp } from '../../../Hooks/useHttp';

type Props = {
    opened: boolean;
    close: () => void;
};

export const ConfigModal = (props: Props) => {
    const { opened, close } = props;
    const http = useHttp();
    const [data, setData] = useState(null as any);
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        http.get('quiz/config')
            .then((res) => setData(res.data.data))
            .catch((err) => console.log(err.response?.data?.data));
    }, []);

    return (
        <Modal
            opened={opened}
            onClose={close}
            centered
            withCloseButton={false}
            size="lg"
            className={'p-0'}
            styles={{ body: { padding: 0 } }}
            radius={20}
        >
            <div className={'flex flex-col justify-center items-center bg-gray-400 py-4'}>
                <Title className={'pl-10 justify-start'} text={'Config'} />
            </div>

            <div className={'flex bg-gray-300 gap-12 p-8 justify-center'}>
                <div className={'flex flex-col  h-[20rem] w-[10rem] gap-2'}>
                    <div className={'flex justify-center items-start pt-4'}>left</div>
                </div>
                <div className={'flex flex-col  h-[20rem] w-[10rem] gap-2'}>
                    <div className={'flex justify-center items-start pt-4'}>right</div>
                </div>
            </div>

            <div className={'flex flex-col justify-center items-end bg-gray-400 pr-10  py-4'}>
                <Button disabled={isDisabled} variant="filled">
                    Start quiz
                </Button>
            </div>
        </Modal>
    );
};
