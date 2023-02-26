import { UiElementProps } from "@/components/ui/shared";
import { FilterBarWithAdd } from "../withAdd/filterBarWithAdd";
import { Autocomplete } from "@/components/ui/form/select/autocomplete/autocomplete";

export interface FilterBarPropsWithSearchProps extends UiElementProps {
    initialValue?: string;
};

export const FilterBarPropsWithSearch = (props: FilterBarPropsWithSearchProps) => {

    return (
        <FilterBarWithAdd className={`${props.className ?? ''}`}>
            <Autocomplete />
        </FilterBarWithAdd>
    );
}