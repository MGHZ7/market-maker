import { ReactElement, ReactNode } from "react";
import { ListItem, ListItemProps } from "./listItem/listItem";

export interface ListProps {
    /**
     *  List Items
     * */
    children?: ReactElement<typeof ListItem>[] | ReactElement<typeof ListItem>;
};

export const List = (props: ListProps) => {

    return (
        <ul className={`list-none space-y-2`}>
            {props.children}
        </ul>
    );
}