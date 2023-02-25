import { UiElementProps } from "@/components/ui/shared";
import { DrawerHeder, DrawerHederProps } from "./header/header";
import { DrawerSection, DrawerSectionProps } from "./section/section";
import { useState } from "react";

export interface DrawerProps extends UiElementProps {
    header?: DrawerHederProps,
    sections?: DrawerSectionProps[];
    isOpen?: boolean;
};

interface AppDrawerStateType {
    isOpen?: boolean;
}

export const Drawer = ({ header, sections, className, isOpen }: DrawerProps) => {

    const [state, setState] = useState<AppDrawerStateType>({ isOpen });

    const handleToggleDrawer = () => {
        setState(state => ({ ...state, isOpen: !state.isOpen }));
    };

    return (<aside className={`bg-white shadow ${className ?? ''} h-screen transition-all px-4 py-4 
        overflow-clip shrink-0 sticky top-0 self-start ${state.isOpen ? 'w-80' : 'w-10 flex flex-col items-end'}`}>
        <DrawerHeder isOpen={state.isOpen} onToggleCloseOpen={handleToggleDrawer} {...header} />
        <div className={`transition-all transition-200  ${state.isOpen ? 'opacity-100' : 'opacity-0'}`}>
            {sections?.map((section, index) => <DrawerSection key={index} {...section} />)}
        </div>
    </aside>);
};

