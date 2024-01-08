import cn from "classnames";

export enum ButtonStyle {
    Primary = "primary",
    Secondary = "secondary",
    Success = "success",
    Warning = "warning",
    Danger = "danger"
}

export type Props = {
    label?: string;
    onClick?: any;
    button_style: ButtonStyle;
    className?: string;
}

export default function Button(props: Props) {
    const {label, onClick, button_style} = props;

    const buttonCn = cn(
        "rounded-md p-3 shadow-md",
        {"bg-sky-800 hover:bg-sky-700" : button_style === ButtonStyle.Primary},
        {"bg-gray-50 hover:bg-gray-100" : button_style === ButtonStyle.Secondary},
        {"bg-emerald-800 hover:bg-emerald-700" : button_style === ButtonStyle.Success},
        {"bg-amber-600 hover:bg-amber-500" : button_style === ButtonStyle.Warning},
        {"bg-rose-800 hover:bg-rose-700" : button_style === ButtonStyle.Danger},
    );

    const textCn = cn(
        "text-sm font-light font-mono text-white",
        {"text-gray-900" : button_style === ButtonStyle.Secondary}
    );

    return (
        <div>
            <button
                className={buttonCn}
                onClick={onClick}
            >
                <p className={textCn}>
                    {label}
                </p>
            </button>
        </div>
    )
}
