import React from 'react';
import { Theme } from '@radix-ui/themes';
import Typography from 'typography';
// @ts-ignore
import githubTheme from 'typography-theme-github';

const typography = new Typography(githubTheme);
typography.injectStyles();

type Props = {
    children: React.ReactNode;
};

export const Layout = (props: Props) => {
    return (
        <Theme appearance="dark" accentColor="mint" panelBackground="solid" scaling="100%">
            <main className={'flex w-screen h-screen bg-slate-500'}>{props.children}</main>
        </Theme>
    );
};
