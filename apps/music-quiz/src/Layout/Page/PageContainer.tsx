import React from 'react';

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            className={
                'flex sm:flex-wrap sm:flex-row flex-col w-full h-[40rem] m-auto sm:items-start items-center sm:justify-center justify-start md:gap-10 gap-10 px-0 sm:px-10 pb-10 sm:pt-40 pt-20'
            }
        >
            {children}
        </div>
    );
};
