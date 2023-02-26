import { Select, SelectProps } from "../select";

export interface AutocompleteProps extends SelectProps {

};

export const Autocomplete = ({ ...props }: AutocompleteProps) => {
    return (
        <Select placeholder={`Search...`} isSearchable={true} {...props} className={`${props.className ?? ''}`} />
    );
}