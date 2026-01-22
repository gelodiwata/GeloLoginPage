export default function ErrorLabel(props: { label?: string }) {
    return props.label && (
        <span className="error-label">{props.label}</span>
    )
}
