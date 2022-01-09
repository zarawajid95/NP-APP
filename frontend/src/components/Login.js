import React, { useState } from 'react'
import loginService from '../services/loginService'
import { useNavigate } from "react-router-dom";
import styles from '../css/Login.module.css';

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, seterrorMsg] = useState('')

  const handleUsernameChange=({ target }) => setUsername(target.value)

  const handlePasswordChange=({ target }) => setPassword(target.value)
          
  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      console.log(username);
      console.log(password);

      const user = await loginService.login({
        username, password,
      })

      if(user){
        console.log(user);
        setUsername('')
        setPassword('')
        if(user === 'NOT_FOUND'){
          seterrorMsg('Invalid Username or Password!')
        }
        else if(user !== 'NOT_FOUND'){
          navigate("/welcome");
          seterrorMsg('')
        // window.open(`/welcome`); 
      }
      else{
          navigate("/");
          seterrorMsg('')
          // window.open(`/`); 
        }  
      }
     
    } catch (exception) {
      console.log(exception)
    }
  }

  return (
    <div className={styles.div}>
      {errorMsg && <h3 id={styles.error}> {errorMsg}</h3>}
      <form onSubmit={handleLogin}>
        <div>
          <b>username</b>
          <input
            className={styles.input}
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <b>password</b>
          <input id="password"
            className={styles.input}
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button id='login-button' type="submit">Login</button>
        <button id='login-button' onClick={() => navigate('/register')} type="submit">Register</button>
        {/* <Link id='register-button'to="/register">Register</Link> */}
      </form>
    </div>
  )
}

export default Login