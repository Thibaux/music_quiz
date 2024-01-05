import React from 'react';

const WeightTypes = {
    normal: 'normal',
    bold: 'bold',
};

type Props = {
    text?: string;
    weight?: string;
    className?: string;
    children?: React.ReactNode;
};

export const Text = (props: Props) => {
    const { text, weight, className, children } = props;
    let baseClass = `flex items-center sm:text-md text-sm sm:font-light font-extralight no-underline ${className}`;

    if (weight === WeightTypes.bold) {
        baseClass = `${baseClass} sm:font-medium font-normal`;
    }

    return <p className={baseClass}>{text ? text : children}</p>;
};
