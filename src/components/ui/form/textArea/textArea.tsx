import { ChangeEvent, DetailedHTMLProps, ReactElement, TextareaHTMLAttributes, UIEvent, forwardRef, useState } from "react";
import { InputLabel } from "../label";
import { UiElementProps } from "../../shared";

export interface TextAreaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, UiElementProps {
    /**
     * Input label, if you leave it empty no label will show
     */
    label?: ReactElement | string;
    /**
     * Input error message, when it is null or undefined, no error considered
     */
    errorMessage?: string;
    /**
     * Chars count left renderer
     */
    charLeftCountRenderer?: (count: number) => ReactElement;
    defaultValue?: string;
};

interface TextAreaState {
    value?: string;
    charsLeftCount?: number;
    isHideCharCount?: boolean;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {

    const [state, setState] = useState<TextAreaState>({ value: props.defaultValue, charsLeftCount: props.maxLength });

    const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChange?.(event);
        const value = event.target.value;
        setState(prevState =>
            ({ ...prevState, value: value, charsLeftCount: (props.maxLength ?? 0) - value.length }));
    };

    const handleOnScroll = (event: UIEvent<HTMLTextAreaElement>) => {
        const target = event.currentTarget;
        const scrollOffset = target.scrollTop;
        const isHideCharCount = target.clientHeight + scrollOffset < target.scrollHeight;
        setState(prevState => ({ ...prevState, isHideCharCount }))
    }


    return (
        <div className={`w-full h-full flex flex-col`}>
            <InputLabel inputId={props.id} content={props.label} className="block mb-2" />
            <div className={`relative ${props.className ?? ''}`}>
                <textarea
                    {...props}
                    className={`border border-secondary text-gray-700 placeholder:text-gray-500 p-2 pb-6 rounded w-full h-full`}
                    title={props.title ?? props.placeholder}
                    onChange={handleOnChange}
                    onScroll={handleOnScroll}
                    ref={ref}
                >{props.defaultValue}
                </textarea>
                {props.maxLength && props.charLeftCountRenderer
                    ? <span className={`absolute left-2 right-4 text-xs text-gray-400 bottom-[8px] 
                        transition-opacity p-1 ${state.isHideCharCount ? 'opacity-0' : ''}`}>
                        {props.charLeftCountRenderer?.(state.charsLeftCount ?? 0)}</span>
                    : null}
            </div>
            {props.errorMessage && <p className="text-red-600 text-xs italic mt-1">{props.errorMessage}</p>}
        </div>
    )
});

TextArea.displayName = 'TextArea';