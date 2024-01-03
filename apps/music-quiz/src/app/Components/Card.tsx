import React from 'react';
import { Card as RadixCard, Inset } from '@radix-ui/themes';

type Props = {
    image: string;
    text: string;
    onClick: () => void;
};

export const Card = (props: Props) => {
    const { image, text, onClick } = props;

    return (
        <RadixCard
            onClick={onClick}
            className={
                'sm:w-[40rem] md:w-[40rem] w-10/12 sm:rounded-2xl rounded-xl cursor-pointer hover:scale-[1.01] duration-300 hover:bg-[#1Db954] text-gray-900 hover:text-slate-200'
            }
        >
            <Inset clip="padding-box" side="top" pb="current">
                <img
                    src={image}
                    alt="image"
                    style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: 140,
                        backgroundColor: 'var(--gray-5)',
                    }}
                />
            </Inset>
            <h1 className={'flex justify-center sm:text-2xl text-xl sm:font-medium font-normal sm:p-5 p-2 px-5'}>
                {text}
            </h1>
        </RadixCard>
    );
};
