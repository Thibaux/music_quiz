import React from 'react';

type Props = {
    text: string;
    className?: string;
};

export const Title = (props: Props) => {
    const { text, className } = props;

    return (
        <p
            className={`flex items-center sm:text-2xl text-xl sm:font-medium font-normal no-underline ${className}`}
        >
            {text}
        </p>
    );
};
