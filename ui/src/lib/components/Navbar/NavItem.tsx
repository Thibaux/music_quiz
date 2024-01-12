import { useRouting } from '../../../../../apps/music-quiz/src/Hooks/useRouting';

type Props = {
    item: string;
    route: string;
};

export const NavItem = (props: Props) => {
    const { navigate } = useRouting();

    return (
        <div
            className={'flex w-20 justify-start items-start text-gray-200 hover:text-[#1Db954]'}
            onClick={() => navigate(props.route)}
        >
            <div aria-current="page">{props.item}</div>
        </div>
    );
};
