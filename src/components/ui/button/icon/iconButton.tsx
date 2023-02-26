import { icon } from "@fortawesome/fontawesome-svg-core";
import { MouseEvent } from "react";
import { Button, ButtonProps } from "../button";

export interface IconButtonProps extends ButtonProps {
    icon: JSX.Element;
};

export const IconButton = (props: IconButtonProps) => {

    return (
        <>
            <Button {...props} className={`rounded-full w-8 h-8 flex justify-center items-center ${props.className ?? ''}`}>
                <i className={`m-auto inline-flex items-center justify-center`}>{props.icon}</i>
            </Button>
        </>
    );
}