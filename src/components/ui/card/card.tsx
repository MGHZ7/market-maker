export interface CardProps {
    title?: string | JSX.Element;
    children?: JSX.Element | null;
};

export const Card = (props: CardProps) => {

    return (
        <div className={`rounded-lg bg-red-50 p-4 shadow-lg`}>
            <div className={`mb-2`}>
                {typeof props.title === 'string' ? <h2 className={`pb-4`}>{props.title}</h2> : props.title}
            </div>
            {props.children}
        </div>
    );
}