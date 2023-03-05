import { StoresList as StoriesList } from "@/components/store/list/storeList";
import { AdminDashboardLayout } from "../../layout";
import { Store } from "@/app/core/store/store";
import { IStoreAppService } from "@/app/interface/store/store";
import { StoreAppServiceProvider, useStoreAppService } from "@/components/store/storeContext";

export interface StoreListProps {
    stores?: Store[];
}

export const StoreList = ({ stores }: StoreListProps) => {
    const storeAppService: IStoreAppService = useStoreAppService();

    const getAllQuery = storeAppService.useGetAllQuery();
    return (
        <AdminDashboardLayout>
            <>
                {getAllQuery.isFetched ? <StoriesList stores={getAllQuery.data?.data} /> : null}
            </>
        </AdminDashboardLayout>
    );
}