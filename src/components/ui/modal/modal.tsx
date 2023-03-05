import { createPortal } from "react-dom";
import { UiElementProps } from "../shared";
import { ReactElement } from "react";
import { IconButton } from "../button";

export interface ModalProps extends UiElementProps {
    show?: boolean;
    hasCloseButton?: boolean;
    onClose?: () => void;
    children?: ReactElement;
};

export const Modal = ({ show, hasCloseButton, onClose, children, className }: ModalProps) => {

    if (!show) return null;

    return createPortal(
        <div className={`absolute w-screen h-screen top-0 flex justify-center items-center backdrop-blur-sm`}>
            <div className={`max-w-lg`}>
                <section className={`relative w-full bg-surface ${className}`}>
                    {hasCloseButton && <IconButton className={`absolute top-1 right-1 `} icon={<span>&times;</span>} onClick={onClose}></IconButton>}
                    {children}
                </section>
            </div>
        </div>
        , document.body)
}