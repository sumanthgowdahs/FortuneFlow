import React, { useRef, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Login from '../Login'
import { useDispatch, useSelector } from 'react-redux'
import { AddMessage } from '../Slice'

function Signup() {
  let {message} = useSelector((store)=>store.task)
  let dispatch = useDispatch()
  let [error,setError]= useState()

  let navigate = useNavigate()


  let nameRef = useRef()
  let emailRef = useRef()
  let passwordRef = useRef()
  let confirmPasswordRef = useRef()

  let nameValidation = /^[A-Za-z]{1,20}$/
  let passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  let fetch = async ()=>{
    let userData = {
      name:nameRef.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value,
      confirmpassword:confirmPasswordRef.current.value
    }
    // setError("Loading....")
    dispatch(AddMessage("Loading...."))

    if(userData.name=="" || userData.email=="" || userData.password=="" || userData.confirmpassword==""){
      // setError("Enter all the feilds")
    dispatch(AddMessage("Enter all the feilds"))

      return
    }
    if(!nameValidation.test(userData.name)){
    dispatch(AddMessage("Enter proper name"))
      return 
    }
    if(!userData.email.includes("@")){
    dispatch(AddMessage("Enter proper email"))

     return
    }
    if(!passwordValidation.test(userData.password)){
    dispatch(AddMessage("password should contain  at least one uppercase letter, one lowercase letter, one number, one special character, and being at least 8 characters long"))

      return
    }
    if(userData.password!==userData.confirmpassword){
    dispatch(AddMessage("confirm Password doesmatch"))
      return
    }

    try {
      let response = await  axios.post("http://localhost:5000/fortuneflow/signup",userData)
    dispatch(AddMessage(response.data))     
    } 
    catch (error) {
    //  console.log(error);
    dispatch(AddMessage(error.response.data))     

    }  
  }
  console.log(message);


  return (
    <div className='signup'>
      
      <div className='signupCard'>
      <h1>Signup</h1>
        <input ref={nameRef} placeholder='name' type="text" />
        <input ref={emailRef} placeholder='email' type="text" />
        <input ref={passwordRef} placeholder='password' type="password" />
        <input ref={confirmPasswordRef} placeholder='confirm password' type="password" />
        <h4 className='error'>{`${message}`}</h4>
        <button onClick={fetch}>Signup</button>
        <h5>Already have accound? <span className='Link'><Link  to="/login" >Login</Link></span> </h5>
        
      </div>

    </div>
  )
}

export default Signup