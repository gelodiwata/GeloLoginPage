import { useEffect, useState } from "react"

export default function useLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loginState, setLoginState] = useState(true)

  function validateLogin(): void {
    if (username.trim() === '' && password.trim() === '') {
      setError('Please type your username and password')
    } else if (username.trim() === '') {
      setError('Please type your username')
    } else if (password.trim() === '') {
      setError('Please type your password')
    } else {
      setLoginState(false)
    }
  }

  useEffect(() => {
    if (loginState) {
      setUsername('')
      setPassword('')
    }
  }, [loginState])

  return {
    loginState,
    error,
    setLoginState,
    setUsername,
    setPassword,
    setError,
    validateLogin
  }
}
