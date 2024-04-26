import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='signup-page'>
        <div className="signup-container">
            <h2>Register</h2>
            <div className="signup-forms">
            <label>Name</label>
            <input/>
            <label>SRN</label>
            <input/>
            <label>School</label>
            <input/>
            <label>Department</label>
            <input/>
            <label>Course</label>
            <input/>
            <label>Section</label>
            <input/>
            <label>Phone Number</label>
            <input/>
            <label>Email</label>
            <input/>
            <label>Password</label>
            <input/>
            </div>
            <button className="signup-button">Register</button>
            <p>Already an User? <Link to='/Login'>Login</Link></p>
        </div>
    </div>
  )
}

export default SignUp