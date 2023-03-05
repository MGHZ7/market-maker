import { InputField } from "@/components/ui/form/field";
import { UiElementProps } from "@/components/ui/shared";
import { useStoreForm } from "./storeFormContext";
import { TextArea } from "@/components/ui/form/textArea";
import { Button } from "@/components/ui/button";
import { useValidationErrorMessage } from "@/hooks";
import { validateUrl } from "@/libs/validation";

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

    return (<form className={`space-y-5 ${className ?? ''}`}
        onSubmit={handleSubmit?.(onSubmit)}>
        <h2>Basic info</h2>
        <fieldset className={`space-y-2 md:grid md:grid-cols-3 md:space-y-0 gap-2`}>
            <InputField
                {...register?.('name', { required: true })}
                className={`w-full`}
                label={`Store name`}
                placeholder={`Your store name`}
                errorMessage={useValidationErrorMessage(errors?.name?.type ?? '')}
            />
            <InputField
                {...register?.('openTime', { required: true })}
                type="time"
                label={`Open time`}
                className={`w-full`}
                placeholder={`Open time`}
                errorMessage={useValidationErrorMessage(errors?.openTime?.type ?? '')}
            />
            <InputField
                {...register?.('closeTime', { required: true })}
                type="time"
                label={`Close time`}
                className={`w-full`}
                placeholder={`Close time`}
                errorMessage={useValidationErrorMessage(errors?.closeTime?.type ?? '')}
            />
            <TextArea
                {...register?.('description', { required: true })}
                label={`Description`}
                className={`w-full col-span-full`}
                placeholder={`Descripe your store`}
                errorMessage={useValidationErrorMessage(errors?.description?.type ?? '')}
            ></TextArea>
        </fieldset>

        <h2>Your store app theme</h2>
        <fieldset className={`space-y-2 sm:grid sm:grid-cols-4 sm:space-y-0 gap-2`}>
            <InputField
                {...register?.('theme.primaryColor', { required: true })}
                type="color"
                className={`w-full !p-0`}
                label={`Primary color`}
                placeholder={`Your store primary color, it shows on navbar, buttons, etc..`}
                errorMessage={useValidationErrorMessage(errors?.theme?.primaryColor?.type ?? '')}
            />
            <InputField
                {...register?.('theme.secondaryColor', { required: true })}
                type="color"
                className={`w-full !p-0`}
                label={`Secondary color`}
                placeholder={`Your store primary color, it shows on navbar, buttons, etc..`}
                errorMessage={useValidationErrorMessage(errors?.theme?.secondaryColor?.type ?? '')}
            />
            <InputField
                {...register?.('theme.backgroundColor', { required: true })}
                type="color"
                className={`w-full !p-0`}
                label={`Background color`}
                placeholder={`Your store primary color, it shows on navbar, buttons, etc..`}
                errorMessage={useValidationErrorMessage(errors?.theme?.backgroundColor?.type ?? '')}
            />
            <InputField
                {...register?.('theme.cardColor', { required: true })}
                type="color"
                className={`w-full !p-0`}
                label={`Surface color`}
                placeholder={`Your store primary color, it shows on navbar, buttons, etc..`}
                errorMessage={useValidationErrorMessage(errors?.theme?.cardColor?.type ?? '')}
            />
        </fieldset>

        <h2>Your social media link</h2>
        <fieldset className={`space-y-2 md:grid md:grid-cols-2 md:space-y-0 gap-2`}>
            <InputField
                {...register?.('socialMediaLinks.facebook', { required: true, validate: (value) => validateUrl(value ?? '') })}
                className={`w-full`}
                label={`Facebook link`}
                placeholder={`https://www.facebook.com`}
                errorMessage={useValidationErrorMessage((errors?.socialMediaLinks?.facebook?.type === 'validate'
                    ? 'url'
                    : errors?.socialMediaLinks?.facebook?.type) ?? '')}
            />
            <InputField
                {...register?.('socialMediaLinks.instagram', { required: true, validate: (value) => validateUrl(value ?? '') })}
                className={`w-full`}
                label={`Instagram link`}
                placeholder={`https://www.instagram.com`}
                errorMessage={useValidationErrorMessage((errors?.socialMediaLinks?.instagram?.type === 'validate'
                    ? 'url'
                    : errors?.socialMediaLinks?.instagram?.type) ?? '')}
            />
        </fieldset>

        <h2>Your store location</h2>
        <fieldset className={`space-y-2 md:grid md:grid-cols-2 md:space-y-0 gap-2`}>
            <InputField
                {...register?.('address.map', { required: true, validate: (value) => validateUrl(value ?? '') })}
                className={`w-full`}
                label={`map link`}
                placeholder={`https://goo.gl/maps/ebt1D8wzVMYqYmNg9`}
                errorMessage={useValidationErrorMessage((errors?.address?.map?.type === 'validate'
                    ? 'url'
                    : errors?.socialMediaLinks?.facebook?.type) ?? '')}
            />
            <InputField
                {...register?.('address.location', { required: true })}
                className={`w-full`}
                label={`Address`}
                placeholder={`Lebanon - Beirut - Al-Hamraa`}
                errorMessage={errors?.address?.location?.type ?? ''}
            />
        </fieldset>

        <div className={`flex justify-end mt-5`}>
            <Button className={``}>
                Save
            </Button>
        </div>
    </form>);
}