import React from 'react';
import { Title } from '../Typography/Title';
import { HomeCardType } from '../../../../../../lib/Shared/Types/Domains/Home/Types';
import { useNavigate } from 'react-router-dom';
import { Text } from '../Typography/Text';
import { Icon } from '../Icon/Icon';
import { Divider } from '../Divider';

export const HomeCard = (props: HomeCardType) => {
    const navigate = useNavigate();
    const { icon, title, description, url, rules } = props;

    return (
        <div
            onClick={() => navigate(url)}
            className={
                'sm:w-96 w-10/12 h-auto rounded-2xl cursor-pointer hover:scale-[1.01] duration-300 bg-slate-100 text-gray-900 p-4'
            }
        >
            <div className={'flex flex-col h-auto'}>
                <div className={'flex items-center gap-2 mb-2'}>
                    <Icon type={icon}></Icon>
                    <Title text={title} className={'items-start'} />
                </div>

                <div className={'flex flex-col gap-2'}>
                    <Text>{description}</Text>
                    <Divider className={'pt-4'} />
                    <Text weight={'bold'}>{rules}</Text>
                </div>
            </div>
        </div>
    );
};
