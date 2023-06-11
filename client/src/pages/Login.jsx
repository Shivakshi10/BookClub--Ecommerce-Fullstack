import React, { useState } from 'react'
import "./login.css"
import { Link } from 'react-router-dom'
import { login } from '../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {

const [username,setUsername] = useState('')
const [password,setPassword] = useState('')
const dispatch = useDispatch();
const {isFetching,error} = useSelector(state =>state.user);

const handleClick = (e) =>{
    e.preventDefault();
    login(dispatch,{username,password});
};


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
        <div className='logright'>
            <span className='formhead'>LOGIN</span>
            <form className='logform'>
                <input className='logint' type='text' placeholder='username'  onChange={(e)=>setUsername(e.target.value)}/>
                
                <input className='logint' type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
                
                
<button className='formSubmit' onClick={handleClick} disabled={isFetching}>LOGIN</button>
            </form>
            <span className='loginques'>Don't have an account? <Link to="/register" className='link'>Register</Link> </span>
           

        </div>
    </div>
  
</div>
  )
}

export default Login
