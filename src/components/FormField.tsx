import type { FormFieldProps } from "../interfaces/LoginPage";
import Label from "./Label";
import TextInput from "./TextInput";

export default function FormField(props: FormFieldProps) {
    return (
        <div className="form-field">
            <Label label={props.label} for={props.label} />
            <TextInput id={props.label} type={props.type} placeholder={props.placeholder} onChange={props.onChange} />
        </div>
    )
}
