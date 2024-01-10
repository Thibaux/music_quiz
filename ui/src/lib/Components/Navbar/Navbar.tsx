import { NavItem } from './NavItem';
import { Icon } from '../../../../../apps/music-quiz/src/Components/Ui/Icon/Icon';
import { IconSize } from '../../../../../lib/Shared/Types/Ui/Icons/Types';

export default function Navbar() {
    const navItems = [
        {
            item: 'Home',
            route: 'home',
        },
        {
            item: 'Start',
            route: 'start',
        },
        {
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
                    <NavItem {...navItem} />
                ))}
            </ul>
        </nav>
    );
}
