import React from 'react';

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            className={
                'flex sm:flex-row flex-col lg:w-full w-10/12 h--full m-auto sm:items-start items-center sm:justify-center justify-start gap-20 pt-40'
            }
        >
            {children}
        </div>
    );
};
