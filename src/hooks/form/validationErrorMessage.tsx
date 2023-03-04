export const useValidationErrorMessage = (type: string) => {

    switch (type) {
        case 'required':
            return "This field is required.";
        case 'maxLength':
            return "This field is too long.";
    }
}