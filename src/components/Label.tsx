import type { LabelProps } from "../interfaces/LoginPage";

export default function Label(props: LabelProps) {
    return (
        <label htmlFor={props.for}>{props.label}</label>
    )
}
