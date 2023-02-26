import { Store } from "@/app/core/store/store";
import { ItemCardList } from "@/components/ui/card/itemList";
import { FilterBarPropsWithSearch } from "@/components/ui/filterAndSearch/layout/withSearchAndAdd/filterBarWithSearchAndAdd";
import { StoreCard } from "../card/storeCard";

export interface StoresListProps {
    stores: Store[];
}

export const StoresList = ({ stores }: StoresListProps) => {

    return (
        <>
            <FilterBarPropsWithSearch className={`mb-4`} />
            <ItemCardList>
                {stores.map((store) => (<StoreCard key={store.id} store={store} />))}
            </ItemCardList>
        </>
    );
}