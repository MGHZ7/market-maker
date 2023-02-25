import { Image, ImageProps } from "../../image";
import { UiElementProps } from "../../shared";
import { Card } from "../card";

export interface MediaCardProps extends UiElementProps {
    image: ImageProps;
    body: JSX.Element;
    footer: JSX.Element;
};

export const MediaCard = ({ image, body, footer }: MediaCardProps) => {

    return (
        <Card>
            <>
                <article className={``}>
                    <Image alt="" {...image} className={`w-full object-cover aspect-[4/3]`} />
                </article>
                <article >
                    {body}
                </article>
                <article>
                    {footer}
                </article>
            </>
        </Card>
    )
}