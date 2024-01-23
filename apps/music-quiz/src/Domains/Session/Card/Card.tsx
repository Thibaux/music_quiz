import React from 'react';

type Props = {
    data: any;
};

export const Card = (props: Props) => {
    const { data } = props;

    return (
        <div
            className={
                'flex flex-col justify-between w-10/12 h-[30rem] p-8 rounded-xl bg-slate-100 text-gray-900'
            }
        >
            <div className={'bg-slate-400 h-full'}>{data.id}</div>
            <div className={'h-px border-t border py-4'} />
            <div className={'bg-slate-400 h-full'}>{data.id}</div>
        </div>
    );
};
