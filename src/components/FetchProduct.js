import axios from 'axios';
import React, { useEffect, useState } from 'react';

function FetchProduct(props) {
    const[productData,setProduct]= useState([])
    useEffect(()=>{

        axios.get('http://localhost:2004/product').then(res=>{
            console.log(res)
            setProduct(res.data)
            console.log("productData",productData)
        })
    })
  return (
            <div>
                {
                       <div>
                       {  productData.length ?
               productData.map(product => 
                
                 <div>
                    
                    <h1>{product.name}</h1>                    
                    <h1>{product.price}</h1>
                    <h1>{product.description}</h1>
                    </div>
                 
               ):"data loading"
             }
                    data
                 </div>
                }
            // </div>
            // <div>Hello</div>
        );
}


export default FetchProduct;
