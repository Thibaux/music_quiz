import React from 'react';
import { Title } from '../Title';

type Props = {
    image: string;
    text: string;
    onClick: () => void;
};

export const Card = (props: Props) => {
    const { image, text, onClick } = props;

    return (
        <div
            onClick={onClick}
            className={
                'sm:w-[40rem] md:w-[40rem] w-10/12 h-80 rounded-2xl cursor-pointer hover:scale-[1.01] duration-300 bg-slate-100 hover:bg-[#1Db954] text-gray-900 hover:text-slate-200'
            }
        >
            <div className={'flex h-[65%]'}>
                <img
                    src={image}
                    alt="image"
                    className={'rounded-t-2xl'}
                    style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'var(--gray-5)',
                        overflow: 'hidden',
                    }}
                />
            </div>
            <div className={'flex h-[35%] justify-center items-center'}>
                <Title text={text} />
            </div>
        </div>
    );
};
