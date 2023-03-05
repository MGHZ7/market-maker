import { Store } from "@/app/core/store/store";
import { ItemCardList } from "@/components/ui/card/itemList";
import { FilterBarPropsWithSearch } from "@/components/ui/filterAndSearch/layout/withSearchAndAdd/filterBarWithSearchAndAdd";
import { StoreCard } from "../card/storeCard";
import { Modal } from "@/components/ui/modal";
import { StoreForm } from "../form";
import { StoreFormProvider, useStoreForm } from "../form/storeFormContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/router";

export interface StoresListProps {
    stores?: Store[];
}

export const StoresList = ({ stores }: StoresListProps) => {

    const router = useRouter();

    const openCreatePage = (): void => {
        router.push("stores/create");
    };

    return (
        <>
            <FilterBarPropsWithSearch className={`mb-4`} onAdd={openCreatePage} />
            <ItemCardList>
                {stores?.map((store) => (<StoreCard key={store.id} store={store} />))}
            </ItemCardList>
        </>
    );
}