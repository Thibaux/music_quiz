import React from 'react';
import { Theme } from '@radix-ui/themes';

type Props = {
    children: React.ReactNode;
};

export const Layout = (props: Props) => {
    return (
        <Theme appearance="dark" accentColor="mint" panelBackground="solid" scaling="100%" radius="full">
            <main className={'flex w-screen h-screen bg-gray-800'}>{props.children}</main>
        </Theme>
    );
};
