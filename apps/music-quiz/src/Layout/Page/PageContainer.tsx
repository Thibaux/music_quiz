import React from 'react';

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
    return <div className={'flex flex-col items-center justify-start gap-20 pt-40'}>{children}</div>;
};
