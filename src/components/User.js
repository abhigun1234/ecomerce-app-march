import axios from 'axios';
import React, { Component } from 'react';

class User extends Component {
    constructor(){
        super()
        this.state={users:[]}
    }
    render() {
        const { users } = this.state.users
        return (
            <div>
                  {   users.data.length ?
          users.data.map(user => 
           
            <div>{user.email}</div>
          ):"data loading"
        }
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