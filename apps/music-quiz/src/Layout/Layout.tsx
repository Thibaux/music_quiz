import React from 'react';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Navbar from '../../../../ui/src/lib/Components/Navbar';

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
            <Navbar />
            <div className={'bg-slate-500 overflow-hidden'}>{props.children}</div>
        </MantineProvider>
    );
};
