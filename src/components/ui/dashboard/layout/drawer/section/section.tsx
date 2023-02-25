import { Drawer } from "../drawer";
import { DrawerItem, DrawerItemProps } from "./item/item";

export interface DrawerSectionProps {
    title?: string;
    items?: DrawerItemProps[];
};

export const DrawerSection = ({ title, items }: DrawerSectionProps) => {
    return (
        <section className={`py-2`}>
            <h6 className={`text-md text-gray-500`}>
                {title}
            </h6>
            <div className={`py-2`}>
                {items?.map((item, index) => (<DrawerItem key={index} {...item} />))}
            </div>
        </section>
    )
};