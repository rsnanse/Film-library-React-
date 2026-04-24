import { SyntheticEvent } from 'react';

export interface FormProps {
    placeholder: string;
    icon?: string;
    text: string;
    direction?: string;
    value?: string;
    onSubmit?: (event: SyntheticEvent<HTMLFormElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement, Element>) => void;
}
