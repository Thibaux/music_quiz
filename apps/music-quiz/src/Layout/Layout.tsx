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
            <div className={'bg-slate-500 overflow-hidden'}>{props.children}</div>
        </MantineProvider>
    );
};
