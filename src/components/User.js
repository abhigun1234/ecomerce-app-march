import axios from 'axios';
import React, { Component } from 'react';

class User extends Component {
    constructor(){
        super()
        this.state={users:[]}
    }
    render() {
       const {users}=this.state
        return (
            <div>
                  {   users.length ?
          users.map(user => 
           
            <div>{user.email}</div>
          ):"data loading"
        }
               data
            </div>
        );
    }  n
    async getData(){
        const res=await axios.get('https://fakestoreapi.com/users')   
        return res
    }
    componentDidMount(){
     
    //  axios.get('https://fakestoreapi.com/users').then(user=>{
       
    //     this.setState({users:user.data})
    //     // const  users  = this.state.users
    //     console.log("users data",this.state.users.data)
        
    //  }).catch(error=>{
    //     console.log("error",error)
    //  })
    this.getData().then(response=>{
                this.setState({users:response.data})
        // const  users  = this.state.users
        console.log("users data",this.state.users.data)
    })

    }
}

export default User;