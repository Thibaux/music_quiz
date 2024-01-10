import React from 'react';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Navbar from '../../../../ui/src/lib/Components/Navbar/Navbar';

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
            <main className={'h-screen w-full'}>
                <Navbar />
                <div className={'bg-slate-500 h-[calc(100vh-50px)] overflow-auto'}>
                    {props.children}
                </div>
            </main>
        </MantineProvider>
    );
};
