export interface ListItemProps {
    // List item
    children?: JSX.Element | string;
};

export const ListItem = (props: ListItemProps) => {

    return (
        <li className={`bg-red-300 p-2 rounded-md text-slate-600 shadow-sm`}>
            {props.children}
        </li>
    );
}