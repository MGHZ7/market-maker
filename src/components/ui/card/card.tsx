import { UiElementProps } from "../shared";

export interface CardProps extends UiElementProps {
    title?: string | JSX.Element;
    children?: JSX.Element | null;
};

export const Card = (props: CardProps) => {

    return (
        <div className={`rounded-lg bg-white p-4 shadow-sm mb-2 ${props.className}`}>
            <div className={``}>
                {typeof props.title === 'string' ? <h2 className={`pb-4`}>{props.title}</h2> : props.title}
            </div>
            {props.children}
        </div>
    );
}