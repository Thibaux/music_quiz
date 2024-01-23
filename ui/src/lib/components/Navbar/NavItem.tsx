import useRouting from '../../../../../apps/music-quiz/src/Hooks/useRouting';

type Props = {
    item: any;
    route: string;
};

export const NavItem = (props: Props) => {
    const { navigate } = useRouting();

    return (
        <div className={'flex w-20 text-gray-200'} onClick={() => navigate(props.route)}>
            <div className={'flex justify-center items-center cursor-pointer'}>{props.item}</div>
        </div>
    );
};
