import type { LabelProps } from "../interfaces/LoginPage";

export default function ErrorLabel(props: Pick<LabelProps, 'label'>) {
    return props.label && (
        <span className="error-label">{props.label}</span>
    )
}
