import './App.css'
import Button from './components/Button'
import LoginForm from './components/LoginForm'
import FormField from './components/FormField'
import ErrorLabel from './components/ErrorLabel'
import useLogin from './hooks/useLogin'

function App() {

  const { loginState, error, setLoginState, setUsername, setPassword, validateLogin } = useLogin()

  return (
    <>
      {
        loginState ?
          <LoginForm onSubmit={validateLogin}>
            <ErrorLabel label={error} />
            <FormField
              label="Username"
              type="text"
              placeholder="type your username"
              onChange={setUsername} />
            <FormField
              label="Password"
              type="password"
              placeholder="type your password"
              onChange={setPassword} />
            <Button title="Submit" />
          </LoginForm> :
          <span>
            You are logged in
            <Button title="Log out" onClick={() => setLoginState(true)} />
          </span>
      }
    </>
  )
}

export default App
