import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <div className='login-page'>
        <div className='login-page-container'>
            <h1>Login</h1>
            <div className='login-forms'>
                <input type='email' placeholder='Email'></input>
                <input type='password' placeholder='Password'></input>
            </div>
            <button className='login-button'>Login</button>
            <p>Haven't you registered yet? <Link to='/SignUp'><h5>Register</h5></Link></p>
        </div>
    </div>
  )
}

export default Login