import { ReactElement } from "react";
import { UiElementProps } from "../../shared";
import { ItemCard, ItemCardProps } from "../itemCard/itemCard";

export interface ItemCardListProps extends UiElementProps {
    children?: ReactElement<ItemCardProps>[]
};

export const ItemCardList = (props: ItemCardListProps) => {

    return (
        <section className={`grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2`}>
            {props.children}
        </section>
    );
}