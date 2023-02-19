import { Card, CardProps } from "@/components/ui/card/card";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface MainDashboardCardProps extends CardProps {
    icon?: JSX.Element;
    count?: number;
};

export const MainDashboardCard = (props: MainDashboardCardProps) => {

    return (
        <Card {...props} title={undefined}>
            <div className={`text-center`}>
                <div className={`flex justify-between items-center text-primary text-3xl`}>
                    {props.icon ?? <FontAwesomeIcon icon={faStore} />}
                    <h4>{props.title ?? 'Store'}</h4>
                </div>
                <h6 className={`text-4xl text-gray-500 mt-4`}>{props.count ?? 0}</h6>
            </div>
        </Card>)
}