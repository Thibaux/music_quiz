import React, { useState } from 'react';
import { AsTypes, SizeTypes, Text, WeightTypes } from '../../../Components/Ui/Typography/Text';
import { TextInput } from '@mantine/core';
import { useHttp } from '../../../Hooks/useHttp';
import Image from '../../../Components/Ui/Image/Image';

type Props = {
    playlist: any;
    setPlaylist: (playlist: any) => void;
};

export const Content = (props: Props) => {
    const { playlist, setPlaylist } = props;
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
        <div className={'flex bg-gray-300 p-6 py-4 gap-8 h-[24rem] justify-start items-start'}>
            <div className={'flex flex-col justify-between h-full w-[20rem]'}>
                <div className={'flex flex-col h-20 justify-start items-start w-[13rem]'}>
                    <Text
                        size={SizeTypes.extraSmall}
                        weight={WeightTypes.light}
                        text={'Search for a playlist on Spotify'}
                    />
                    <TextInput
                        radius={4}
                        placeholder="Best songs of 2023..."
                        onChange={handleChange}
                    />
                </div>

                {playlist && (
                    <div className={'flex h-40 flex-col'}>
                        <div className={'p-2 rounded-2xl border border-gray-400 '}>
                            <Image
                                className={'w-24 h-24 rounded'}
                                src={playlist.image}
                                alt={playlist.title}
                            />
                            <div className={'flex flex-col h-auto w-[12rem]'}>
                                <Text
                                    as={AsTypes.title}
                                    size={SizeTypes.large}
                                    weight={WeightTypes.normal}
                                    text={playlist.title}
                                />
                                <Text
                                    size={SizeTypes.medium}
                                    weight={WeightTypes.light}
                                    text={'# of songs: ' + playlist.total_amount_tracks}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className={'w-px border-l border'} />

            <div className={'flex flex-col w-[30rem] gap-2 overflow-scroll'}>
                {results?.map((playlist: any) => (
                    <div
                        key={playlist.id}
                        onClick={() => setPlaylist(playlist)}
                        className={'flex cursor-pointer hover:bg-gray-400 p-2 rounded-xl'}
                    >
                        {playlist.title}
                    </div>
                ))}
            </div>
        </div>
    );
};
