import axios from 'axios';
import React, { Component } from 'react';

class User extends Component {
    constructor(){
        super()
        this.state={users:[]}
    }
    render() {
        return (
            <div>
                {/* Users
               {
                this.state.users.data.map(user=>{

                    return <h1>{user.email}</h1>
                })
               } */}
               data
            </div>
        );
    }
    componentDidMount(){
     
     axios.get('https://fakestoreapi.com/users').then(user=>{
       
        this.setState({users:user})
        console.log("users data",this.state.users.data)
        
     }).catch(error=>{
        console.log("error",error)
     })

    }
}

export default User;