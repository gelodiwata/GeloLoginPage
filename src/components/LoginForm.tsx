import type { LoginFormProps } from "../interfaces/LoginPage";

/**
 * Login Form Component
 * Serves as the form wrapper for all form inputs
 * @param props see LoginFormProps
 */
export default function LoginForm(props: LoginFormProps) {
    return (
        <form onSubmit={() => props.onSubmit()}>
            {props.children}
        </form>
    )
}
