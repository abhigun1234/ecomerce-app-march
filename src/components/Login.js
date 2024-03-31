import React, { useState } from 'react';

function Login(props) {
    const [name,setname]=useState('')
    const [password,setpassword]=useState('')
    const onNameChange=(event)=>{
        console.log("name",event)
        setname(event.target.value)
    }
    const onPhoneNoChange=(event)=>{
        console.log("name",event)
        setpassword(event.target.value)
    }
    const login=(event)=>{
        console.log("name",name)
        console.log("password",password)
        event.preventDefault()
    }
    return (
        <div>
            <form onSubmit={login}>
         <div>
            <label>Enter User Name</label>
            <input value={name} onChange={onNameChange} placeholder='Enter Name'></input>
        </div>   
        <div>
            <label>Enter Phone No</label>
            <input value={password} onChange={onPhoneNoChange} placeholder='Enter Phone no'></input>
        </div>   
        <button type='submit'>Submit</button>
        </form>
        </div>
    );
}

export default Login;