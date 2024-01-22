import React, { useState } from 'react';
import { Text } from '../../../Components/Ui/Typography/Text';
import { TextInput } from '@mantine/core';
import { useHttp } from '../../../Hooks/useHttp';

type Props = {
    handleClick: any;
};

export const Content = (props: Props) => {
    const { handleClick } = props;
    const http = useHttp();
    const [results, setResults] = useState([]);

    const handleChange = async (event: any) => {
        if (!event.currentTarget.value) {
            setResults([]);
        }

        http.get(`playlists/search?term=${event.currentTarget.value}`)
            .then((res) => setResults(res.data.data))
            .catch((err) => console.log(err.response?.data?.data));
    };

    return (
        <div className={'flex bg-gray-300 p-8 gap-10 h-[24rem] justify-start items-start'}>
            <div className={'flex flex-col justify-start items-start h-auto w-[20rem] gap-2'}>
                <Text weight={'thin'} text={'Search for a playlist on Spotify'} />
                <TextInput radius={4} placeholder="Best songs of 2023..." onChange={handleChange} />
            </div>

            <div className={'w-px border-l border'} />

            <div className={'flex flex-col w-[20rem] gap-2 overflow-scroll'}>
                {results?.map((playlist: any) => (
                    <div
                        key={playlist.id}
                        onClick={() => handleClick(playlist.id)}
                        className={'flex cursor-pointer'}
                    >
                        {playlist.title}
                    </div>
                ))}
            </div>
        </div>
    );
};
