export interface FormFieldProps {
    label: string;
    type: string;
    placeholder: string;
    onChange: (value: string) => void
}

export interface LabelProps {
    label?: string;
    for: string
}

export interface ButtonProps {
    title: string;
    onClick?: () => void
}

export interface TextInputProps {
    id: string;
    type: string;
    placeholder: string;
    onChange: (value: string) => void
}

export interface LoginFormProps {
    children: React.ReactNode;
    onSubmit: Function
}