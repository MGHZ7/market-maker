import { ReactElement, useCallback } from "react";
import { useDropzone, FileRejection } from 'react-dropzone';
import { UiElementProps } from "../../../common/uiElement/uiElement";
import { InputLabel } from "../label";

export interface FileUploadProps extends UiElementProps {
    /**
     * Body of the drop zone
     */
    body?: JSX.Element | string | undefined;
    /**
     * Input label, if you leave it empty no label will show
     */
    label?: ReactElement | string;
    /**
     * Content that shows when a file is able to be dropped on the drop zone
     */

    onDropAvailableContent?: JSX.Element | string | undefined;
    /**
     * List of accepted file types, the map key is to specify the file type, and the associated array is to specify extensions, empty array means that, accept all files that have the same type
     */
    accept?: { [key: string]: Array<string> };
    /**
     * Max files count to upload
     * 
     * @param files 
     * @returns 
     */
    maxFilesCount?: number;
    /**
     * Max file size in bytes
     */
    maxSize?: number;
    /**
     * Min file size in bytes
     */
    minSize?: number;
    /**
     * Upload multiple files
     */
    multiple?: boolean;
    /**
     * Handle files dropped or added by user
     */
    onAdd?: (files: Array<File>) => void;
    /**
     * On files rejected event to handle rejected files
     */
    onFilesRejected?: (rejections: FileRejection[]) => void;
};

export const FileUpload = ({ accept, body, onAdd, onDropAvailableContent, onFilesRejected,
    maxFilesCount, maxSize, minSize, multiple, label, className }: FileUploadProps) => {

    const onDrop = useCallback((acceptedFiles: File[], fileRejections: FileRejection[]) => {
        if (acceptedFiles?.length) {
            onAdd?.(acceptedFiles);
        }

        if (fileRejections?.length) {
            onFilesRejected?.(fileRejections);
        }
    }, [onAdd, onFilesRejected]);

    const { getRootProps, getInputProps, isDragActive } =
        useDropzone({ onDrop, accept: accept, maxFiles: maxFilesCount, maxSize, minSize, multiple });

    return (
        <div>
            {label ? <InputLabel content={label} className="inline-block" /> : null}
            <div {...getRootProps({
                className: `border-2 border-dashed border-gray-200 rounded-md flex justify-center items-center 
                bg-background bg-opacity-30 overflow-hidden ${className ?? ''}`
            })}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        (onDropAvailableContent || <p>Drop the files here ...</p>) :
                        (body || <p>Drag 'n' drop some files here, or click to select files</p>)
                }
            </div>
        </div>
    )
};