import { StoreType, Store } from "@/app/core/store/store";
import { useFormWithDefaultSettings } from "@/hooks";
import { ReactElement, createContext, useContext } from "react";
import { UseFormReturn } from "react-hook-form";
import { useStoreAppService } from "../storeContext";
import { useQueryClient } from "react-query";
import colors from "tailwindcss/colors"

export interface StoreFormContextProps {
    form?: UseFormReturn<StoreType>;
    onSubmit: (values: StoreType) => Promise<void>;
};

export const StoreFormContext = createContext<StoreFormContextProps>({ form: undefined, onSubmit: () => Promise.resolve() });

export interface StoreFormProviderProps {
    initialValue?: StoreType;
    children?: ReactElement;
}

export const StoreFormProvider = ({ children, initialValue }: StoreFormProviderProps) => {

    const storeAppService = useStoreAppService();
    const queryClient = useQueryClient();

    const storeAddQuery = storeAppService.useAddQuery(queryClient);

    const storeForm = useFormWithDefaultSettings<StoreType>({
        defaultValues: {
            theme: {
                primaryColor: colors.blue[500],
                secondaryColor: colors.red[300],
                backgroundColor: colors.blue[50],
                cardColor: "#ffffff",
            },
            ...initialValue
        }
    });

    const onSubmit = async (values: StoreType) => {
        const response = storeAddQuery.mutateAsync(Store.createStoreFromJson(values));
    };

    return (
        <StoreFormContext.Provider value={{ form: storeForm, onSubmit }}>
            {children}
        </StoreFormContext.Provider>
    );
};

export const useStoreForm = () => useContext(StoreFormContext);