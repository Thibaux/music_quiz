import React from 'react';
import cn from 'classnames';

export enum WeightTypes {
    light,
    normal,
    bold,
}

export enum SizeTypes {
    extraSmall,
    small,
    medium,
    large,
    extraLarge,
}

export enum AsTypes {
    title,
}

type Props = {
    text?: string;
    weight?: WeightTypes;
    size?: SizeTypes;
    as?: AsTypes;
    className?: string;
    children?: React.ReactNode;
};

export const Text = (props: Props) => {
    const { text, weight, size, as, children } = props;

    const asClass = cn(as === undefined && '', as === AsTypes.title && 'truncate');

    const weightClass = cn(
        weight === undefined && 'sm:font-medium font-normal',
        weight === WeightTypes.light && 'sm:font-light font-thin',
        weight === WeightTypes.normal && 'sm:font-medium font-normal',
        weight === WeightTypes.bold && 'sm:font-bold font-semibold'
    );

    const sizeClass = cn(
        size === undefined && 'sm:text-md text-xs',
        size === SizeTypes.extraSmall && ' sm:text-xs text-xs',
        size === SizeTypes.small && ' sm:text-sm text-xs',
        size === SizeTypes.medium && 'sm:text-md text-sm',
        size === SizeTypes.large && ' sm:font-lg font-md',
        size === SizeTypes.large && ' sm:font-xl font-lg'
    );

    const className = cn(
        `flex items-center no-underline`,
        props.className,
        weightClass,
        sizeClass,
        asClass
    );

    return <p className={className}>{text ? text : children}</p>;
};
