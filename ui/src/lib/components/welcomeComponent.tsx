type Props = {}
export default function WelcomeComponent(props: Props) {

    return (
        <div className={'flex flex-col justify-center items-center gap-3'}>
            <div className={'flex w-[80vw] bg-green-400 h-16 rounded-lg justify-center items-center'}>
                <p className={'text-white text-2xl'}>Epic Music Quiz</p>
            </div>
            <div className={'flex w-[40vw] bg-pink-200 h-16 rounded-lg justify-center items-center'}>
                <p className={'text-white text-lg'}>Piew pipiepipiepiewww</p>
            </div>
            <div>
                <button className={'bg-red-200 rounded-lg p-3 w-16'} onClick={() => console.log('oi')}>Oi</button>
            </div>
        </div>
    )
}
