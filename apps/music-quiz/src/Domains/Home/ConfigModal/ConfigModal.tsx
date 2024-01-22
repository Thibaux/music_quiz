import { Button, Modal } from '@mantine/core';
import { Title } from '../../../Components/Ui/Typography/Title';
import React, { useState } from 'react';
import { useHttp } from '../../../Hooks/useHttp';
import { Content } from './Content';

type Props = {
    opened: boolean;
    close: () => void;
};

export const ConfigModal = (props: Props) => {
    const { opened, close } = props;
    const http = useHttp();
    const [playlistId, setPlaylistId] = useState(null);

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

            <Content handleClick={(id: any) => setPlaylistId(id)} />

            <div className={'flex flex-col justify-center items-end bg-gray-400 pr-10  py-4'}>
                <Button disabled={!playlistId} variant="filled">
                    Start quiz
                </Button>
            </div>
        </Modal>
    );
};
