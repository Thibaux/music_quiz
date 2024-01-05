import { GoMoveToStart } from 'react-icons/go';
import { IconTypes } from '../../../../../../lib/Shared/Types/Ui/Icons/Types';

type Props = {
    type: IconTypes;
};

export const Icon = (props: Props) => {
    const { type } = props;
    const baseClassName = 'w-[24px] h-[24px] text-blue-600';

    if (type === 'startArrow') {
        return <GoMoveToStart className={baseClassName} />;
    }

    if (type === 'endArrow') {
        return <GoMoveToStart className={`${baseClassName} rotate-180`} />;
    }

    return <div>Icon not found!</div>;
};
