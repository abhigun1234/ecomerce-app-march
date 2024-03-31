import axios from 'axios';
import React from 'react';

function AddNewProduct(props) {
   const  addNewProduct=()=>{
        axios('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>{

                console.log("res",res)
            })
            .then(json=>console.log(json))
    }
    return (
        <div>
            <button onClick={addNewProduct}>addProduct</button>
        </div>
    );
}

export default AddNewProduct;