import { StoresList } from "@/components/store/list/storeList";
import { AdminDashboardLayout } from "../../layout";
import { Store } from "@/app/core/store/store";

export interface StoreListProps {
    stores?: Store[];
}

export const StoreList = ({ stores }: StoreListProps) => {

    return (
        <AdminDashboardLayout>
            <StoresList stores={stores} />
        </AdminDashboardLayout>
    );
}