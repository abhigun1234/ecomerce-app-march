import axios from 'axios';

import React, { useState } from 'react';

function Register(props) {
    //  const [userId,setUserId]=useState("")
    //  const [title,setTitle]=useState("")
    //  const [country,setBody]=useState("")
    const [person,setPostData]=useState({first_name:'',last_name:'',city:''})
    //  const  onHandlePostChange=(event)=>{
    //     console.log("value",event.target.value)
    //     setName(event.target.value)
    //  }
    //  const handleEmailNameChange=(event)=>{
    //     console.log("value",event.target.value)
    //     setEmail(event.target.value)
    //  }
    //  const onhandleCountry=(event)=>{
    //     console.log("value",event.target.value)
    //     setCountry(event.target.value)
    //  }

     const handleSubmit=(event)=>{
    //   console.log("name",name)
    //   console.log("email",email)
    //   console.log("country",email)
    console.log("person",person)
    // axios('https://jsonplaceholder.typicode.com/posts',postData).then(res=>{
    //     console.log("data",res)
    // }).catch(error=>{
    //     console.log("error",error)
    // })
      event.preventDefault()
     }
    return (
        <div className="register">
            <form onSubmit={handleSubmit}>
                
                <div>
                <label>First_Name</label>
                <input type='text' value={person.first_name} onChange={e=>setPostData({...person,first_name:e.target.value})}></input>
                </div>
                <div>
                <label>Last Name</label>
                <input type='text' value={person.last_name} onChange={e=>setPostData({...person,last_name:e.target.value})}></input>
                </div>
                <div>
                <label>city</label>
                <input type='text' value={person.city} onChange={e=>setPostData({...person,city:e.target.value})}></input>
                </div>
                {/* <div>
                    <label>Country</label>
                    <select value={country} onChange={onhandleCountry}>
                    <option value="India">India</option>
                    <option value="England">England</option>
                    <option value="Usa">USA</option>
                    <option value="Afrika">Afrika</option>
                    </select>
                  
                </div> */}
                <h2>Your First name is- {person.first_name}</h2>
                <h2>Your last name is- {person.last_name}</h2>
                <h2>{JSON.stringify(person)}</h2>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Register;    