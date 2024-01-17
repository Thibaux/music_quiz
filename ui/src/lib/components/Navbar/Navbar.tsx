import React from 'react';
import { Icon } from '../../../../../apps/music-quiz/src/Components/Ui/Icon/Icon';
import { IconSize } from '../../../../../lib/Types/Ui/Icons/Types';
import { NavItem } from './NavItem';

export default function Navbar() {
    const navItems = [
        {
            id: 1,
            item: <Icon className={'mr-8'} type={'musicQuizLogo'} size={IconSize.small} />,
            route: 'home',
        },
        {
            id: 2,
            item: 'Home',
            route: 'home',
        },
        {
            id: 3,
            item: 'Start',
            route: 'start',
        },
    ];

    return (
        <div className="flex items-center justify-center w-full h-14 px-8 py-4 bg-sky-900 border-gray-200">
            {navItems.map((navItem) => (
                <NavItem key={navItem.id} {...navItem} />
            ))}
        </div>
    );
}
