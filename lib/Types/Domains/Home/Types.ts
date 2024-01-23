import { IconTypes } from '../../Ui/Icons/Types';

export type HomeCardType = {
    id: number;
    type: string;
    title: string;
    description: string;
    rules: string;
    icon: IconTypes;
    url: string;
};
