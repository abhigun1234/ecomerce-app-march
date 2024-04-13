import React, { useEffect, useState } from 'react';
import data from '../data/product.json'

function ProductDataTable(props) {
    const [productData,setData]=useState(data)
    useEffect(()=>{

        console.log("data",data)
    })
    return (
        <div>
       <table className='table'>
                    <thread>
                        <th scope='col'>#</th>
                        <th scope='col'>name</th>
                        <th scope='col'>price</th>
                        <th scope='col'>description</th>
                        <tbody>

                            {

                                productData.map(product=>{
                                    return(<tr>
                                        <td>{product.category}</td>
                                        <td>{product.price==0 ? 'no value':product.price}</td>
                                        <td>{product.title}</td>
                                    </tr>)
                                })
                            }
                            
                        </tbody>
                    </thread>
                    </table>     
        </div>
    );
}

export default ProductDataTable;