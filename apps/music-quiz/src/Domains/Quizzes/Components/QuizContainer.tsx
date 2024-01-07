import React from 'react';

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
    return <div className={'flex flex-col w-full items-center justify-center pt-40'}>{children}</div>;
};
