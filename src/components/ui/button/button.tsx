import { MouseEvent } from "react";
import { UiElementProps } from "../shared/elementType";

export interface ButtonProps extends UiElementProps {
    onClick: (event: MouseEvent) => void;
}