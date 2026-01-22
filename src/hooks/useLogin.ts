import { useEffect, useState } from "react"

/**
 * USELOGIN HOOK
 * Serves as the logic capital of the whole Login Page component
 * @returns loginState, error, setLoginState, setUsername, setPassword, setError, validateLogin
 */
export default function useLogin() {

  // Here are the necessary states for loginPage
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loginState, setLoginState] = useState(true)

  /**
   * CustomValidate for mocking purposes
   * @param mock_username string
   * @param mock_password string
   */
  function customValidate(mock_username: string, mock_password: string) {
    if (username.trim() !== mock_username && password.trim() !== mock_password) {
      setError('Invalid username and password')
    } else if (username.trim() !== mock_username) {
      setError('Invalid username')
    } else if (password.trim() !== mock_password) {
      setError('Invalid password')
    } else {
      setLoginState(false)
    }
  }

  /**
   * Validates each field before setting the login state
   */
  function validateLogin(): void {
    if (username.trim() === '' && password.trim() === '') {
      setError('Please type your username and password')
    } else if (username.trim() === '') {
      setError('Please type your username')
    } else if (password.trim() === '') {
      setError('Please type your password')
    } else {
      // Change to your desired values for mocking
      customValidate('admin', 'adminPass')
    }
  }

  /**
   * 👁️👄👁️ Keeps an eye on the login state
   * if TRUE, means the loginState is ON
   * and all fields' values should be reset.
   */
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
