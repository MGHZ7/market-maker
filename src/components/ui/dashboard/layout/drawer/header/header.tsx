import { UiElementProps } from "@/components/ui/shared";
import { faChevronLeft, faChevronRight, faDashboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TOGGLE_ICON = {
    open: <FontAwesomeIcon icon={faChevronRight} />,
    close: <FontAwesomeIcon icon={faChevronLeft} />
};

const LOGO = <FontAwesomeIcon icon={faDashboard} className={`text-2xl`} />

export interface DrawerHederProps extends UiElementProps {
    /**
     * App logo
     */
    logo?: JSX.Element;
    /**
     * Toggle button, it has two states: open and close, it contained inseide an icon button
     */
    toggleIcon?: {
        open: JSX.Element,
        close: JSX.Element,
    };
    /**
     * The drawer state of opening
     */
    isOpen?: boolean;
    /**
     * Event that happens when user clicks on the toggle button to hide or show the drawer
     * @returns 
     */
    onToggleCloseOpen?: () => void;
};

export const DrawerHeder = ({ logo, toggleIcon, isOpen, onToggleCloseOpen, className }: DrawerHederProps) => {

    return (
        <section className={`${className ?? ''} flex justify-center`}>
            <div className="flex-1 text-primary">
                <div className={`w-16 h-16`}>
                    {logo ?? LOGO}
                </div>
            </div>
            <div className={`flex-3`}>
                <button className={` text-primary text-md ${isOpen ? '' : 'translate-x-2'}`} onClick={(event) => onToggleCloseOpen?.()}>
                    {isOpen ? TOGGLE_ICON.close : TOGGLE_ICON.open}
                </button>
            </div>
        </section>
    )
}