import { ChangeEvent, SyntheticEvent } from 'react';

export interface FormProps {
    placeholder: string;
    icon?: string;
    text: string;
    direction?: string;
    value?: string;
    onSubmit?: (e: SyntheticEvent<HTMLFormElement>) => void;
    onChange?: (e: ChangeEvent<HTMLInputElement, Element>) => void;
}
