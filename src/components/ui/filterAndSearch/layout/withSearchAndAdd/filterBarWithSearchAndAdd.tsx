import { UiElementProps } from "@/components/ui/shared";
import { FilterBarWithAdd } from "../withAdd/filterBarWithAdd";
import { Autocomplete } from "@/components/ui/form/select/autocomplete/autocomplete";

export interface FilterBarPropsWithSearchProps extends UiElementProps {
    initialValue?: string;
    onAdd?: () => void;
};

export const FilterBarPropsWithSearch = ({ initialValue, onAdd, className }: FilterBarPropsWithSearchProps) => {

    return (
        <FilterBarWithAdd className={`${className ?? ''}`} onAdd={onAdd}>
            <Autocomplete />
        </FilterBarWithAdd>
    );
}