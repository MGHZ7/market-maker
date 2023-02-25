import { ImageProps } from "../../image";
import { MediaCard } from "../mediaCard/mediaCard";

export interface ItemCardProps {
    image: ImageProps;
    title: string;
    description: string;
};

export const ItemCard = ({ image, title, description }: ItemCardProps) => {

    const Body = () => (<div className={``}>
        <h4>{title}</h4>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
    </div>);

    const Footer = () => <div className={`flex`}>View</div>

    return (
        <MediaCard image={{ ...image, width: 200, height: 150 }} body={<Body />} footer={<Footer />} />
    );
}