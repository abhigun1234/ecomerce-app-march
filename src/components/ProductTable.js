import axios from 'axios';
import React, { useEffect, useState } from 'react';
import data from '../data/product.json'

function ProductTable(props) {
    const[productList,setProduct]=useState(data)
    // useEffect(()=>{
    //     axios.get('https://fakestoreapi.com/products').then(product=>{
           
    //         setProduct(product.data)
    //         console.log("product data",productList)
    //     })

    // })
    return (
        <div>
            <div>
                <table className='table'>
                    <thread>
                        <th scope='col'>#</th>
                        <th scope='col'>name</th>
                        <th scope='col'>price</th>
                        <th scope='col'>description</th>
                    </thread>
                    <tbody>
                        {
                            productList.map(product=>{

                                return(  <tr>
                                    <td>{product.title}</td>
                                    <td>{product.price==0 ?"no value":product.price}</td>
                                    <td>{product.category}</td>
                                    </tr>)
                            })
                        }
                      
                        
                    </tbody>

                </table>
            </div>
        </div>
    );
}

export default ProductTable;