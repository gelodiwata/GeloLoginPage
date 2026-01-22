export default function LoginForm(props: { children: React.ReactNode, onSubmit: Function }) {
    return (
        <form onSubmit={() => props.onSubmit()}>
            {props.children}
        </form>
    )
}
