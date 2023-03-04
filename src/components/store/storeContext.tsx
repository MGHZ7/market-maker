import { IStoreAppService, StoreAppService } from "@/app/interface/store/store";
import { ReactElement, createContext, useContext } from "react";

export const StoreAppServiceContext = createContext<IStoreAppService>(
    new StoreAppService()
);

export interface StoreAppServiceProviderProps {
    children: ReactElement;
};

export const StoreAppServiceProvider = ({ children }: StoreAppServiceProviderProps) => {
    return (<StoreAppServiceContext.Provider value={new StoreAppService()}>
        {children}
    </StoreAppServiceContext.Provider>
    );
};

export const useStoreAppService = () => useContext<IStoreAppService>(StoreAppServiceContext);