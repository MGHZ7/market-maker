import { BackendStoreProps, Store } from "@/app/core/store/store";
import { useFormWithDefaultSettings } from "@/hooks";
import { ReactElement, createContext, useContext } from "react";
import { UseFormReturn } from "react-hook-form";
import { useStoreAppService } from "../storeContext";
import { useQueryClient } from "react-query";

export interface StoreFormContextProps {
    form?: UseFormReturn<BackendStoreProps>;
    onSubmit: (values: BackendStoreProps) => Promise<void>;
};

export const StoreFormContext = createContext<StoreFormContextProps>({ form: undefined, onSubmit: () => Promise.resolve() });

export interface StoreFormProviderProps {
    initialValue?: BackendStoreProps;
    children?: ReactElement;
}

export const StoreFormProvider = ({ children, initialValue }: StoreFormProviderProps) => {

    const storeAppService = useStoreAppService();
    const queryClient = useQueryClient();

    const storeAddQuery = storeAppService.useAddQuery(queryClient);

    const storeForm = useFormWithDefaultSettings<BackendStoreProps>({
        defaultValues: initialValue
    });

    const onSubmit = async (values: BackendStoreProps) => {
        debugger;
        const response = storeAddQuery.mutateAsync(Store.createStoreFromJson(values));
        console.log(response);
    };

    return (
        <StoreFormContext.Provider value={{ form: storeForm, onSubmit }}>
            {children}
        </StoreFormContext.Provider>
    );
};

export const useStoreForm = () => useContext(StoreFormContext);