import { icon } from "@fortawesome/fontawesome-svg-core";
import { MouseEvent } from "react";
import { ButtonProps } from "../button";

export interface IconButtonProps extends ButtonProps {
    icon: JSX.Element;
};

export const IconButton = (props: IconButtonProps) => {

    return (
        <button
            className={`btn bg-gray-100 text-red-300 rounded-full py-1 px-2 text-lg cursor-pointer shadow-sm ${props.className}`}
            onClick={props.onClick}>
            <i className={``}>{props.icon}</i>
        </button>
    );
}