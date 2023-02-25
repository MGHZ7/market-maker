import { UiElementProps } from "../../shared";
import { Drawer, DrawerProps } from "./drawer";

export interface AdminMainLayoutProps extends UiElementProps {
    drawer?: DrawerProps;
    children?: JSX.Element | undefined;
};

export const AdminMainLayout = ({ drawer, children }: AdminMainLayoutProps) => {

    return (
        <div className={`flex items-stretch`}>
            <Drawer {...drawer} className={`${drawer?.className ?? ''}`} />
            <main className={`p-10 flex-1 shrink bg-background @container`}>
                {children}
            </main>
        </div>
    );
}