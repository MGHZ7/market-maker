import { Button } from "../../button";
import { ImageProps } from "../../image";
import { MediaCard } from "../mediaCard/mediaCard";

import TextTruncate from 'react-text-truncate'; // recommend

export interface ItemCardProps {
    image: ImageProps;
    title: string;
    description: string;
};

const NUMBER_OF_DESCRIPTION_LINES = 2;

export const ItemCard = ({ image, title, description }: ItemCardProps) => {

    const Body = () => (<div className={``}>
        <h4 className={`text-lg truncate`}>{title}</h4>
        <TextTruncate
            line={NUMBER_OF_DESCRIPTION_LINES}
            element="div"
            truncateText="…"
            text={description}
            containerClassName={`text-sm text-ellipsis overflow-hidden h-10`}
        />
    </div>);

    const Footer = () => <div className={`flex justify-center`}>
        <Button>
            View
        </Button>
    </div>

    return (
        <MediaCard image={{ ...image }} body={<Body />} footer={<Footer />} />
    );
}