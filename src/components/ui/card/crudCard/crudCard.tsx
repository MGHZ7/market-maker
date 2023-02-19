import { ButtonProps, IconButton, IconButtonProps } from "../../button";
import { Card, CardProps } from "../card";

export interface CrudCardProps extends CardProps {
    actions: CardActionsLayoutProps[];
};

export interface CardActionsLayoutProps {
    position: 'topEndCorner' | 'bottomEndCorner' | 'topStartCorner' | 'bottomCenterCorner';
    button: IconButtonProps;
};

export const CrudCard = (props: CrudCardProps) => {

    const topEndCorner = props.actions.find(a => a.position === 'topEndCorner');

    const Header = () => {
        return (<div className={`flex justify-between`}>
            <h2>{props.title}</h2>
            {topEndCorner
                ? <div className="row">
                    <IconButton {...topEndCorner.button} />
                </div>
                : null}
        </div>);
    };

    return (
        <Card title={<Header />}>
            <>
                {props.children}
            </>
        </Card>
    );
}