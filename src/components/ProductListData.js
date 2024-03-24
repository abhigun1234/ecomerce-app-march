import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ProductListData(props) {
    const [productList,setProduct]=useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then(product=>{
           
            setProduct(product.data)
            console.log("product data",productList)
        })

    })
    return (
        <div>
            
        </div>
    );
}

export default ProductListData;