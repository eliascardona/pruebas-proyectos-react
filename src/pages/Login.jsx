import React, { useRef, useState } from "react"
import { auth } from "../firebase/base"
import { signInWithEmailAndPassword } from "firebase/auth"
import "../gStyles.css"

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
      window.location.reload()
    } catch(error) {
      let errorCode = error.code
      if (errorCode == "auth/wrong-password") {
        setError("Wrong password, try again!")
      }
    }
  }
  const accordionRef = useRef(null)
  function showLogin() {
    accordionRef.current.style.display="block"
  }
  
  return (
    <div>
      <div className="accordionTit" onClick={showLogin}>click to login</div>
      <div style={{display:'none'}} ref={accordionRef}>
        <span>Email</span>
        <input
          type="email"
          ref={emailRef}
          placeholder="hello@email.com"
          className="input"
        />
        <span>Password</span>
        <input
          type="password"
          ref={passwordRef}
          placeholder="thePassIs12356"
          className="input"
        />
        <button
          type="button"
          onClick={login}
          className="formBtn"
        >
          Login
        </button>
        <small style={{color:'red'}}>
          {error}
        </small>
      </div>
    </div>
  )
}

export default Login