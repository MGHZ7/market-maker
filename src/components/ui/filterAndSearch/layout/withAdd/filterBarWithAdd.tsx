import { UiElementProps } from "@/components/ui/shared";
import { FilterBarLayout } from "../filterBar";
import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "@/components/ui/button";

export interface FilterBarWithAddProps extends UiElementProps {
    onAdd?: () => void;
    children?: ReactElement;
};

export const FilterBarWithAdd = ({ children, onAdd, className }: FilterBarWithAddProps) => {

    return (
        <FilterBarLayout className={`${className}`}>
            <article className={`flex justify-between items-center`}>
                <div>
                    {children}
                </div>
                <div>
                    <IconButton icon={<FontAwesomeIcon icon={faPlus} onClick={onAdd} />} />
                </div>
            </article>
        </FilterBarLayout>
    )
}