import React, { useState } from 'react'
import registerService from '../services/registerService'
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [dob, setDOB] = useState('')
  const [gender, setGender] = useState('')

  const handleUsernameChange=({ target }) => setUsername(target.value)

  const handlePasswordChange=({ target }) => setPassword(target.value)

  const handleEmailChange=({ target }) => setEmail(target.value)

  const handleDOBChange=({ target }) => setDOB(target.value)
  
  const handleGenderChange=({ target }) => setGender(target.value)
          
  const handleRegister = async (event) => {
    event.preventDefault()
    try {
      console.log(username);
      console.log(password);
      console.log(email);
      console.log(gender);
      console.log(dob);

      const user_obj = {
          "username": username,
          "password": password,
          "email": email,
          "dob": dob,
          "gender": gender,
      }

      const user = await registerService.register(user_obj);
      console.log(user);

      if(user){
        navigate("/")
      }
    } catch (exception) {
      console.log(exception)
    }
  }

  return (
    <div>
      <form onSubmit={handleRegister}>
        <div>
          <b>Username</b>
          <input
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <b>Password</b>
          <input id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <b>Email</b>
          <input id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <b>Date of Birth</b>
          <input id="dob"
            value={dob}
            type="date"
            onChange={handleDOBChange}
          />
        </div>
        <div>
          <b>Gender</b>
          <input id="gender"
            value={gender}
            onChange={handleGenderChange}
          />
        </div>
        <button id="register-button" type="submit">Register</button>
        <button id="register-button" onClick={() => navigate('/')} type="submit">Login</button>
        {/* <Link to="/" className="btn btn-primary">Login</Link> */}
      </form>
    </div>
  )
}

export default Register