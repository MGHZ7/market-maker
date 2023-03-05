import { CreateStorePage } from '@/components/store/create/createStorePage';
import { StoreAppServiceProvider } from '../../../../components/store/storeContext';
export interface BackendCreateStorePageProps {

};

export const BackendCreateStorePage = (props: BackendCreateStorePageProps) => {

    return (
        <StoreAppServiceProvider>
            <CreateStorePage />
        </StoreAppServiceProvider>
    );
};

export default BackendCreateStorePage;