import React, { useEffect, useState } from 'react';
import data from '..//data/user.json'
function UserData(props) {
     const [userData,setData]=useState(data)
    useEffect(()=>{
        console.log("userData",userData)
    })
    return (
        <div>
            <h1>User Data Table</h1>
            <table className='table'>
            <thread>
                        <th scope='col'>#</th>
                        <th scope='col'>First Name</th>
                        <th scope='col'>Last Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Gender</th>
                        </thread>
                        <tbody>

                            {
                             userData.map(user=>{


                                return(<tr>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.email}</td>
                                </tr>)
                                
                             })

                            }
                            </tbody>

            </table>
        </div>
    );
}

export default UserData;