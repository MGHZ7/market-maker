import { MouseEvent, ReactElement } from "react";
import { UiElementProps } from "../shared/elementType";

export interface ButtonProps extends UiElementProps {
    onClick?: (event: MouseEvent) => void;
    children?: ReactElement | string;
};

export const Button = (props: ButtonProps) => {

    return (
        <button className={`bg-background rounded transition-all text-primary hover:bg-primary py-1 px-3 
        hover:text-surface hover:shadow ${props.className}`} onClick={props.onClick}>
            {props.children}
        </button>
    );
}