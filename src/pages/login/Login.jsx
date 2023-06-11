import React from 'react'
import "./login.css"
import { useState } from 'react'
import { useDispatch} from "react-redux";
import { login} from "../../redux/apiCalls";

const Login = () => {

const [username,setUsername] = useState("");
const [password,setPassword] = useState("");
const dispatch = useDispatch()

const handeClick  = (e) =>{
    e.preventDefault()
    //
    login(dispatch,{username,password});
};



  return (
    <div className='loginWrapper'>
       <div className='loginBox'>
      <input className='loginInput' type='text' 
      placeholder='username' 
      onChange={e=>setUsername(e.target.value)}
       />
      <input className='loginInput' type='password' placeholder='password' onChange={e=>setPassword(e.target.value)} />
      <button className='loginButton' onClick={handeClick}>Login</button>
    </div>
    </div>
   
  )
}

export default Login;