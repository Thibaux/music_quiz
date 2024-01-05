type Props = {
    className?: string;
};

export const Divider = (props: Props) => {
    const { className } = props;
    return <div className={`${className} border-b-2 h-px relative`}>&nbsp;</div>;
};
