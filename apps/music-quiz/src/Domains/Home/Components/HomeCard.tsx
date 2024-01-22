import React from 'react';
import { Title } from '../../../Components/Ui/Typography/Title';
import { HomeCardType } from '../../../../../../lib/Types/Domains/Home/Types';
import { Text } from '../../../Components/Ui/Typography/Text';
import { Icon } from '../../../Components/Ui/Icon/Icon';
import { Divider } from '../../../Components/Ui/Divider';
import { useDisclosure } from '@mantine/hooks';
import { ConfigModal } from '../ConfigModal/ConfigModal';

export const HomeCard = (props: HomeCardType) => {
    const { icon, title, description, url, rules } = props;
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <div
                onClick={open}
                className={
                    'rounded-2xl cursor-pointer hover:scale-[1.01] duration-300 bg-slate-100 text-gray-900 p-4'
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

            <ConfigModal opened={opened} close={close} />
        </>
    );
};
