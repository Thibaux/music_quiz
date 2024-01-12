import cn from "classnames";

export enum CardStyle {
    Primary = "primary",
    Secondary = "secondary",
    Success = "success",
    Warning = "warning",
    Danger = "danger"
}

export type Props = {
    label?: string;
    onClick?: any;
    card_style: CardStyle;
    className?: string;
    children?: any;
    gradient?: boolean;
}

export default function Card(props: Props) {
    const {label, onClick, card_style, className, children, gradient = false} = props;

    const cardCn = cn(
        "flex flex-col border-2 border-dashed rounded-lg p-3 shadow-md gap-3",
        className ?? "",
        {"bg-sky-800/20 border-sky-800" : card_style === CardStyle.Primary},
        {"bg-gray-300/20 border-gray-600" : card_style === CardStyle.Secondary},
        {"bg-emerald-800/20 border-emerald-800" : card_style === CardStyle.Success},
        {"bg-amber-600/20 border-amber-600" : card_style === CardStyle.Warning},
        {"bg-rose-800/20 border-rose-800" : card_style === CardStyle.Danger},
    );

    const gradientCn = cn(
        "flex flex-col border-2 border-dashed rounded-lg p-3 shadow-md gap-3",
        className ?? "",
        {"bg-gradient-to-b from-sky-800/20 to-sky-800/10 border-sky-800" : card_style === CardStyle.Primary},
        {"bg-gradient-to-b from-gray-300/20 to-gray-300/10 border-gray-600" : card_style === CardStyle.Secondary},
        {"bg-emerald-800/20 border-emerald-800" : card_style === CardStyle.Success},
        {"bg-amber-600/20 border-amber-600" : card_style === CardStyle.Warning},
        {"bg-rose-800/20 border-rose-800" : card_style === CardStyle.Danger},
    );

    const dividerCn = cn(
        "border-b h-px relative"
    );

    const textCn = cn(
        "text-sm font-light font-mono",
        {"text-white" : card_style === CardStyle.Success || card_style === CardStyle.Danger || card_style === CardStyle.Warning}
    );

    return (
        <div
            className={gradient ? gradientCn : cardCn}
        >
            {label && (
                <div className={'flex flex-col text-center'}>
                    <p>{label}</p>
                    <div className={'border-b-2 border-dashed border-sky-800'}/>
                </div>
            )}
            <div className={'flex flex-row gap-3'}>
                {children}
            </div>
        </div>
    )
}
