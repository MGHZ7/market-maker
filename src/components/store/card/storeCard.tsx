import { Store } from "@/app/core/store/store";
import { ItemCard } from "@/components/ui/card/itemCard";
import { UiElementProps } from "@/components/ui/shared";

export interface StoreCardProps {
    store: Store;
}
export const StoreCard = ({ store }: StoreCardProps) => {

    return (
        <ItemCard
            title={store.name}
            image={{ src: store.logo ?? '' }}
            description={store.description ?? ''} />
    );
};