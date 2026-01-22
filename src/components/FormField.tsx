import type { FormFieldProps } from "../interfaces/LoginPage";
import Label from "./Label";
import TextInput from "./TextInput";

/**
 * Form Field Component
 * Acts as the container of label and textInput component
 * @param props see FormFieldProps
 */
export default function FormField(props: FormFieldProps) {
    return (
        <div className="form-field">
            <Label label={props.label} for={props.label} />
            <TextInput id={props.label} type={props.type} placeholder={props.placeholder} onChange={props.onChange} />
        </div>
    )
}
