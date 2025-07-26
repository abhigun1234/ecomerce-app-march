import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ProductDataNew(props) {

    const [productData,setProduct]=useState([])

    useEffect(()=>{

        axios.get('https://api.escuelajs.co/api/v1/products').then(res=>{
            console.log("res",res)

            setProduct(res.data)
        }).catch(error=>{
            console.log("error",error)
        })
    })
    return (
        <div>
            {

            }
        </div>
    );
}

export default ProductDataNew;