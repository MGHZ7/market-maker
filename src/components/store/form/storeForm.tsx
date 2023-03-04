import { InputField } from "@/components/ui/form/field";
import { UiElementProps } from "@/components/ui/shared";
import { useStoreForm } from "./storeFormContext";
import { TextArea } from "@/components/ui/form/textArea";
import { Button } from "@/components/ui/button";
import { useValidationErrorMessage } from "@/hooks";

export interface StoreFormProps extends UiElementProps {

};

export const StoreForm = ({ className }: StoreFormProps) => {

    const {
        form,
        onSubmit
    } = useStoreForm()!;

    const { register,
        handleSubmit,
        formState: { errors } } = form || { formState: {} };

    return (<form className={`${className ?? ''}`} onSubmit={handleSubmit?.(onSubmit)}>
        <InputField
            {...register?.('name', { required: true })}
            className={`w-full`}
            placeholder={`Store name`}
            errorMessage={useValidationErrorMessage(errors?.name?.type ?? '')}
        />
        <TextArea
            {...register?.('description', { required: true })}
            className={`w-full`}
            placeholder={`Descripe your store`}
            errorMessage={useValidationErrorMessage(errors?.description?.type ?? '')}
        ></TextArea>

        <div className={`flex justify-end`}>
            <Button className={``}>
                Save
            </Button>
        </div>
    </form>);
}