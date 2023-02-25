import { ImageProps } from "../../image";
import { UiElementProps } from "../../shared";
import { Card } from "../card";
import Image from "next/image";

export interface MediaCardProps extends UiElementProps {
    image: ImageProps;
    body: JSX.Element;
    footer: JSX.Element;
};

export const MediaCard = ({ image, body, footer }: MediaCardProps) => {

    return (
        <Card>
            <>
                <article className={`aspect-[4/3]`}>
                    <Image
                        {...image}
                        alt={image.alt ?? ''}
                        width={image.width ?? IMAGE_OPTIONS.width}
                        height={image.height ?? IMAGE_OPTIONS.height}
                        className={`w-full object-cover aspect-[4/3] rounded`} />
                </article>
                <article className={`mt-2`} >
                    {body}
                </article>
                <article className={`mt-2`}>
                    {footer}
                </article>
            </>
        </Card>
    )
};

const IMAGE_OPTIONS = {
    width: 200,
    height: 150
};