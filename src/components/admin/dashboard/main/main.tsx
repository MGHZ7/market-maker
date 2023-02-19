import { MainDashboardCard, MainDashboardCardProps } from "@/components/ui/admin/card/mainDashboardCards/card";
import { UiElementProps } from "@/components/ui/shared";
import { CARDS } from "./mainData";

export interface DashboardMainProps extends UiElementProps {

};

export const DashboardMain = (props: DashboardMainProps) => {

    const cards = CARDS;
    return (
        <section className={`flex justify-between`}>
            {cards.map((card, index) => (<MainDashboardCard key={index} {...card} className={`flex-1 mx-2`} />))}
        </section>
    );
}