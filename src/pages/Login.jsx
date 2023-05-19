import React, { useRef, useState } from "react"
import { auth } from "../firebase/base"
import { signInWithEmailAndPassword } from "firebase/auth"

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState("")

  const login = async (e) => {
    e.preventDefault()
    try {
      const email = emailRef.current.value
      const password = passwordRef.current.value
      await signInWithEmailAndPassword(auth, email, password)
    } catch(error) {
      let errorCode = error.code
      if (errorCode == "auth/wrong-password") {
        setError("Wrong password, try again!")
      }
    }
  }

  return (
    <>
      <h2>Access</h2>
        <span>Email</span>
        <input
          type="email"
          ref={emailRef}
          placeholder="hello@email.com"
          // className={styles.input}
        />
        <span>Password</span>
        <input
          type="password"
          ref={passwordRef}
          placeholder="thePassIs12356"
          // className={styles.input}
        />
        <button
          type="button"
          onClick={login}
          // className={styles.formBtn}
        >
          Login
        </button>
        <small style={{color:'red'}}>
          {error}
        </small>
    </>
  )
}

export default Login