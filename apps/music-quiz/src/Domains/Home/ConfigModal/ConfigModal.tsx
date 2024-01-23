import React, { useState } from 'react';
import { Button, Modal } from '@mantine/core';
import { Content } from './Content';
import { useHttp } from '../../../Hooks/useHttp';
import { Title } from '../../../Components/Ui/Typography/Title';
import useRouting from '../../../Hooks/useRouting';

type Props = {
    opened: boolean;
    close: () => void;
    quizType: string;
};

export const ConfigModal = (props: Props) => {
    const { opened, close, quizType } = props;
    const http = useHttp();
    const { navigate } = useRouting();
    const [playlist, setPlaylist] = useState(null as any);

    const create = () => {
        http.post(`quiz-sessions/`, {
            playlist: playlist,
            type: quizType,
        })
            .then((res) => {
                console.log(res);
                navigate(`/sessions/${res.data.data.id}`);
            })
            .catch((err) => console.log(err.response?.data?.data));
    };

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
                <Title className={'pl-8 justify-start'} text={'Config'} />
            </div>

            <Content playlist={playlist} setPlaylist={setPlaylist} />

            <div className={'flex flex-col justify-center items-end bg-gray-400 pr-10 py-4'}>
                <Button disabled={!playlist} variant="filled" onClick={create}>
                    Start quiz
                </Button>
            </div>
        </Modal>
    );
};
