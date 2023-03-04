import { UiElementProps } from "../../shared";
import ReactSelect from 'react-select';
import { StateManagerProps } from "react-select/dist/declarations/src/useStateManager";

export interface SelectProps extends UiElementProps, StateManagerProps {

};

export const Select = (props: SelectProps) => {

    return (
        <div className={`${props.className}`}>
            <ReactSelect
                classNames={{
                    container: (state) =>
                        `w-full`
                    ,
                    control: (state) =>
                        `!rounded ${state.isFocused ? 'border-primary' : ''}`

                }}
                {...props}
            />
        </div>
    )
}