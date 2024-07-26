import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Home from './component/Home'
import { AddMessage } from './Slice'
import { useDispatch, useSelector } from 'react-redux'

function Login() {
    let { message } = useSelector((store) => store.task)
    let dispatch = useDispatch()

    let emailRef = useRef()
    let passwordRef = useRef()
    let navigate = useNavigate()

    let passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    

    let fetch = async () => {
        dispatch(AddMessage("LOADING..."))
        let userData = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        

        if (userData.email == "" || userData.password == "") {
            dispatch(AddMessage("Enter all the fields"))
            return
        }
        if (!userData.email.includes("@")) {
            dispatch(AddMessage("Enter proper emai"))
            return
        }
        if (!passwordValidation.test(userData.password)) {
            dispatch(AddMessage("password should contain  at least one uppercase letter, one lowercase letter, one number, one special character, and being at least 8 characters long"))
            return
        }
        try {
            let response = await axios.post("https://fortuneflow.onrender.com/fortuneflow/login", userData)
            console.log(response);
            // dispatch(AddMessage("response.data"))
            navigate(`/home/${userData.email}/Dashboard`)
        }
        catch (error) {
            console.log(error);
            dispatch(AddMessage(error.response.data))

        }

    }
    return (
        <div className='login'>
            <div className="loginCard">
                <h1>Login</h1>
                <input ref={emailRef} placeholder='Email ' type="text" />
                <input ref={passwordRef} placeholder='password' type="password" />
                <h5 className='error'>{message}</h5>
                <button onClick={fetch}>login</button>
                <h4>create an account <Link to="/">signup</Link></h4>

            </div>
        </div>

    )
}

export default Login