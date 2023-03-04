import { Store } from "@/app/core/store/store";
import { ItemCardList } from "@/components/ui/card/itemList";
import { FilterBarPropsWithSearch } from "@/components/ui/filterAndSearch/layout/withSearchAndAdd/filterBarWithSearchAndAdd";
import { StoreCard } from "../card/storeCard";
import { Modal } from "@/components/ui/modal";
import { StoreForm } from "../form";
import { StoreFormProvider, useStoreForm } from "../form/storeFormContext";
import { Button } from "@/components/ui/button";

export interface StoresListProps {
    stores?: Store[];
}

export const StoresList = ({ stores }: StoresListProps) => {


    return (
        <>
            <FilterBarPropsWithSearch className={`mb-4`} />
            <Modal show={true} className={`p-4 min-w-max`}>
                <div className={`space-y-4`}>
                    <h1 className={`mr-10`}>Add a store</h1>
                    <StoreFormProvider>
                        <StoreForm />
                    </StoreFormProvider>
                </div>
            </Modal>
            <ItemCardList>
                {stores?.map((store) => (<StoreCard key={store.id} store={store} />))}
            </ItemCardList>
        </>
    );
}