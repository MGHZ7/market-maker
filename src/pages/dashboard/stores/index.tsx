import { StoreAppServiceProvider } from "@/components/store/storeContext";
import { StoreList as StoryList } from "../../../components/dashboard/stores/list/storeList";
export interface ServerDashboardStoreListProps { }

export const ServerDashboardStores = (props: ServerDashboardStoreListProps) => {
  return (
    <StoreAppServiceProvider>
      <StoryList />
    </StoreAppServiceProvider>
  );
};

export default ServerDashboardStores;