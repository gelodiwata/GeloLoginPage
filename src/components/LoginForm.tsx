import type { LoginFormProps } from "../interfaces/LoginPage";

export default function LoginForm(props: LoginFormProps) {
    return (
        <form onSubmit={() => props.onSubmit()}>
            {props.children}
        </form>
    )
}
