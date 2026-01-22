import type { ButtonProps } from "../interfaces/LoginPage";

/**
 * Button Component
 * @param props see ButtonProps
 */
export default function Button(props: ButtonProps) {
    return (
        <button type="submit" onClick={() => props.onClick && props.onClick()}>{props.title}</button>
    )
}
