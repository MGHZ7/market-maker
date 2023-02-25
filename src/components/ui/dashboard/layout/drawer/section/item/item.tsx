import { UiElementProps } from "@/components/ui/shared";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ICON = <FontAwesomeIcon icon={faBox} />

export interface DrawerItemProps extends UiElementProps {
    icon?: JSX.Element;
    title?: string;
    href?: string;
    children?: JSX.Element[] | JSX.Element | undefined;
};

export const DrawerItem = ({ title, href, icon, children, className }: DrawerItemProps) => {

    return (
        <a href={href} className={`${className ?? ''} bg-white  text-gray-700 text-sm w-full block py-2 rounded-sm
        hover:bg-gray-100 hover:shadow-sm transition-all transition-200`}>
            <span className={`px-2`}>{icon ?? ICON}</span>
            <span className={`px-2`}>{title}</span>
        </a>
    );
}