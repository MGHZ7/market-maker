import { UiElementProps } from "@/components/ui/shared";
import NextImage from 'next/image';

export interface ImageProps extends UiElementProps {
    src: string;
    alt?: string;
    fill?: boolean;
    width?: number;
    height?: number;
};

export const Image = ({ src, alt, fill, width, height, className }: ImageProps) => {
    return (<img src={src} width={width} height={height} alt={alt ?? ''} className={`${className ?? ''}`} />)
};
