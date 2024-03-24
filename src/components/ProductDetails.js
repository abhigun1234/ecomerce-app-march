import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ProductDetails(props) {
    const [productArray,setProduct]=useState([])
    useEffect(()=>{
        console.log("useeffect")
        axios.get('https://fakestoreapi.com/products').then(res=>{
            console.log("response",res) 
       setProduct(res.data)
        console.log("product",productArray)
     }).catch(error=>{

     })

    })
    return (
        <div>
            
        </div>
    );
}

export default ProductDetails;