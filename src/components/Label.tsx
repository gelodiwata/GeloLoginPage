import type { LabelProps } from "../interfaces/LoginPage";

/**
 * Label Component
 * @param props see LabelProps
 */
export default function Label(props: LabelProps) {
    return (
        <label htmlFor={props.for}>{props.label}</label>
    )
}
