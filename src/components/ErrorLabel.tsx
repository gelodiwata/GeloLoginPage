import type { LabelProps } from "../interfaces/LoginPage";

/**
 * Error label Component
 * @param props see some of the LabelProps
 */
export default function ErrorLabel(props: Pick<LabelProps, 'label'>) {
    // If props.label has value, this component's label will be displayed
    return props.label && (
        <span className="error-label">{props.label}</span>
    )
}
