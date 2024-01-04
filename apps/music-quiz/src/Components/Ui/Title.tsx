import React from 'react';

export const Title = ({ text }: { text: string }) => {
    return (
        <p
            className={
                'flex justify-center sm:text-2xl text-xl sm:font-medium font-normal sm:p-5 p-2 px-5 no-underline'
            }
        >
            {text}
        </p>
    );
};
