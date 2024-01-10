import { NavItem } from './NavItem';
import { Icon } from '../../../../../apps/music-quiz/src/Components/Ui/Icon/Icon';
import { IconSize } from '../../../../../lib/Shared/Types/Ui/Icons/Types';

export default function Navbar() {
    const navItems = [
        {
            id: 1,
            item: 'Home',
            route: 'home',
        },
        {
            id: 2,
            item: 'Start',
            route: 'start',
        },
        {
            id: 3,
            item: 'Welcome',
            route: 'welcome',
        },
    ];

    return (
        <nav className="flex flex-col justify-start h-[50px] flex-wrap items-start px-8 py-4 bg-sky-900 border-gray-200">
            <a href="" className="flex items-center space-x-3 rtl:space-x-reverse w-auto">
                <Icon type={'musicQuizLogo'} size={IconSize.medium} />
                <span className="flex items-center text-xl font-medium whitespace-nowrap text-white">
                    Music Quiz
                </span>
            </a>
            <ul className="flex w-auto">
                {navItems.map((navItem) => (
                    <NavItem key={navItem.id} {...navItem} />
                ))}
            </ul>
        </nav>
    );
}
