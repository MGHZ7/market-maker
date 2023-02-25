import { UiElementProps } from "../../shared";
import { ItemCard, ItemCardProps } from "../itemCard/itemCard";

export interface ItemCardListProps extends UiElementProps {
    cards?: ItemCardProps[];
};

export const ItemCardList = (props: ItemCardListProps) => {

    return (
        <section className={`grid grid-flow-row grid-cols-3 gap-2`}>
            {props.cards?.map((card, index) => (<ItemCard key={index} {...card} />))}
        </section>
    );
}