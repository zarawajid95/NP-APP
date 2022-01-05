import React, { useState } from 'react'
import loginService from '../services/loginService'
import { useNavigate } from "react-router-dom";
import styles from '../css/Login.module.css';

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

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
        if(user){
          navigate("/welcome");
        // window.open(`/welcome`); 
        }
        else{
          navigate("/");
          // window.open(`/`); 
        }
        
        // redirect to main page
      }
     
    } catch (exception) {
      console.log(exception)
    }
  }

  return (
    <div className={styles.div}>
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