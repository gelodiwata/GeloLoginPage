import type { ButtonProps } from "../interfaces/LoginPage";

export default function Button(props: ButtonProps) {
    return (
        <button type="submit" onClick={() => props.onClick && props.onClick()}>{props.title}</button>
    )
}
