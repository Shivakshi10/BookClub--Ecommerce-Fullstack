import React from 'react'
import "./register.css"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='regContainer'>
        <div className='regWrapper'>
            <div className='regleft'> 
            <div>
                    <img className='regimg' src='/assets/bg19.png' alt=''></img>
                </div>
                <span className='regHead'>BookClub</span>
                <span className='regdesc'>The World's greatest stories in one place</span>
                <span className='regdesc'>We want to help you find the stories you love!</span>
               
            </div>
            <div className='regright'>
                <span className='formhead'>REGISTER</span>
                <form>
                    <input className='regint' type='text' placeholder='name' />
                    <input className='regint' type='text' placeholder='last name' />
                    <input className='regint' type='text' placeholder='username' />
                    <input className='regint' type='email' placeholder='email' />
                    <input className='regint' type='password' placeholder='password' />
                    <input className='regint' type='password' placeholder='confirm password' />
                    
 <button className='formSubmit'>CREATE ACCOUNT</button>
                </form>
                <span className='loginques'>Aleady have an account? <Link to="/login" className='link'>Login</Link> </span>
               

            </div>
        </div>
      
    </div>
  )
}

export default Register
