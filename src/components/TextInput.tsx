import type { TextInputProps } from "../interfaces/LoginPage";

/**
 * Text Input Component
 * @param props see TextInputProps
 */
export default function TextInput(props: TextInputProps) {
    return (
        <input
            id={props.id}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e.target.value)}
            type={props.type}
            placeholder={props.placeholder}
        />
    )
}
