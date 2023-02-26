import { Button } from "../../button";
import { ImageProps } from "../../image";
import { MediaCard } from "../mediaCard/mediaCard";

export interface ItemCardProps {
    image: ImageProps;
    title: string;
    description: string;
};

const NUMBER_OF_DESCRIPTION_LINES = 2;
const MAX_CHARACTERS_COUNT = 70;

export const ItemCard = ({ image, title, description }: ItemCardProps) => {

    const Body = () => (<div className={``}>
        <h4 className={`text-lg truncate`}>{title}</h4>
        <p className={`text-sm text-ellipsis overflow-hidden`}
            dangerouslySetInnerHTML={{
                __html:
                    `${description.substring(0, MAX_CHARACTERS_COUNT)}
                     ${description.length > MAX_CHARACTERS_COUNT ? '...' : ""}`
            }}></p>
    </div >);

    const Footer = () => <div className={`flex justify-center`}>
        <Button>
            View
        </Button>
    </div>

    return (
        <MediaCard image={{ ...image }} body={<Body />} footer={<Footer />} />
    );
}