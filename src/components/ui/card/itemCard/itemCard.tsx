import { ImageProps } from "../../image";
import { MediaCard } from "../mediaCard/mediaCard";

export interface ItemCardProps {
    image: ImageProps;
    title: string;
    description: string;
};

export const ItemCard = ({ image, title, description }: ItemCardProps) => {

    const Body = () => (<div className={``}>
        <h4 className={`text-lg truncate`}>{title}</h4>
        <p className={`text-sm text-ellipsis overflow-hidden h-10`} dangerouslySetInnerHTML={{ __html: description }}></p>
    </div>);

    const Footer = () => <div className={`flex justify-center`}>
        <button className={`bg-secondary rounded hover:bg-primary py-1 px-3 text-surface`}>
            View
        </button>
    </div>

    return (
        <MediaCard image={{ ...image }} body={<Body />} footer={<Footer />} />
    );
}