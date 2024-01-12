import { GoMoveToStart } from 'react-icons/go';
import { GiMusicalScore } from 'react-icons/gi';

import { IconSize, IconTypes } from '../../../../../../lib/Types/Ui/Icons/Types';

type Props = {
    type: IconTypes;
    size?: IconSize;
};

export const Icon = (props: Props) => {
    const { type, size } = props;
    let baseClassName = 'w-[24px] h-[24px] text-blue-600';

    if (size === IconSize.medium) {
        baseClassName = `w-[50px] h-[50px]`;
    }

    if (type === 'startArrow') {
        return <GoMoveToStart className={baseClassName} />;
    }

    if (type === 'endArrow') {
        return <GoMoveToStart className={`${baseClassName} rotate-180`} />;
    }

    if (type === 'musicQuizLogo') {
        return <GiMusicalScore className={baseClassName} />;
    }

    return <div>Icon not found!</div>;
};