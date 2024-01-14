import React from 'react';

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            className={
                'flex sm:flex-wrap sm:flex-row flex-col lg:w-full w-10/12 h-[40rem] m-auto sm:items-start items-center sm:justify-center justify-start md:gap-10 gap-10 px-10 pb-10 pt-40'
            }
        >
            {children}
        </div>
    );
};
