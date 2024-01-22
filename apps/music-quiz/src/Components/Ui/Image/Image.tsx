import React from 'react';

type Props = {
    src: string;
    alt?: string;
    className?: string;
};

const Image = (props: Props) => {
    const { src, alt, className } = props;

    return (
        <>
            <img src={src} alt={alt} draggable={false} className={className ? className : ''} />
        </>
    );
};

export default Image;
