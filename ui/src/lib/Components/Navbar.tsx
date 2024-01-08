import Heart from 'ui/src/lib/svg/heart.svg';

export default function Navbar() {
    return (
        <nav className="flex flex-col justify-start h-20 flex-wrap items-start px-8 py-4 bg-sky-900 border-gray-200">
            <a href="" className="flex items-center space-x-3 rtl:space-x-reverse w-auto">
                <img src={Heart} className="h-8 w-auto" alt="Wip" />
                <span className="flex items-center text-2xl font-semibold whitespace-nowrap text-white">
                    WIP
                </span>
            </a>
            <div className="w-auto">
                <ul className="font-medium flex gap-3">
                    <li>
                        <a
                            href="/home"
                            className="block py-2 px-3 text-gray-200 hover:text-white hover:bg-sky-800 rounded-lg transition-all duration-500"
                            aria-current="page"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/start"
                            className="block py-2 px-3 text-gray-200 hover:text-white hover:bg-sky-800 rounded-lg transition-all duration-500"
                        >
                            Start
                        </a>
                    </li>
                    <li>
                        <a
                            href="/playlists"
                            className="block py-2 px-3 text-gray-200 hover:text-white hover:bg-sky-800 rounded-lg transition-all duration-500"
                        >
                            Playlists
                        </a>
                    </li>
                    <li>
                        <a
                            href="/welcome"
                            className="block py-2 px-3 text-gray-200 hover:text-white hover:bg-sky-800 rounded-lg transition-all duration-500"
                        >
                            Welcome
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
