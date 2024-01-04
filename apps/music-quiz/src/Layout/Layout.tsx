import React from 'react';
import Typography from 'typography';
// @ts-ignore
import githubTheme from 'typography-theme-github';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

const typography = new Typography(githubTheme);
typography.injectStyles();

type Props = {
    children: React.ReactNode;
};

export const Layout = (props: Props) => {
    return (
        <MantineProvider
            theme={{
                fontFamily: 'Roboto, sans-serif',
                fontFamilyMonospace: 'Monaco, Courier, monospace',
                headings: { fontFamily: 'Comfortaa, sans-serif' },
            }}
        >
            <main className={'flex w-screen h-screen bg-slate-500'}>
                <div className={'w-full h-full'}>{props.children}</div>
            </main>
        </MantineProvider>
    );
};
