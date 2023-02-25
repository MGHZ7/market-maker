import { UiElementProps } from "../../shared";
import { ItemCard, ItemCardProps } from "../itemCard/itemCard";

export interface ItemCardListProps extends UiElementProps {
    cards?: ItemCardProps[];
};

export const ItemCardList = (props: ItemCardListProps) => {

    return (
        <section className={`columns-2xs`}>
            {props.cards?.map((card, index) => (<ItemCard key={index} {...card} />))}
        </section>
    );
}