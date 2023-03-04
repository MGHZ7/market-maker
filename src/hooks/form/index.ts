import {
  FieldValues,
  UseFormProps,
  UseFormReturn,
  useForm,
} from "react-hook-form";

export const useFormWithDefaultSettings = <
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
>(
  props?: UseFormProps<TFieldValues, TContext>
): UseFormReturn<TFieldValues, TContext> =>
  useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    ...props,
  });

export * from "./validationErrorMessage";
