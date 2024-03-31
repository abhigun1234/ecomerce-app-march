import axios from 'axios';
import React, { useState } from 'react';

function AddNewProduct(props) {
    const [product,setProduct]=useState({title: '',
    price: '',
    description: '',
    image: 'https://i.pravatar.cc',
    category: ''})
   const  addNewProduct=(event)=>{
        axios('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                product
            )
        })
            .then(res=>{
                  alert("res",res.status)
                console.log("res",res)
            }).catch(error=>{
             alert('error')
            })
            .then(json=>console.log(json))
            event.preventDefault()
    }
    return (
        <div>

<form onSubmit={addNewProduct}>
                
                <div>
                <label>Title</label>
                <input type='text' value={product.title} onChange={e=>setProduct({...product,title:e.target.value})}></input>
                </div>
                <div>
                <label>Price</label>
                <input type='text' value={product.price} onChange={e=>setProduct({...product,price:e.target.value})}></input>
                </div>
                <div>
                <label>Category</label>
                <input type='text' value={product.category} onChange={e=>setProduct({...product,category:e.target.value})}></input>
                </div>
                {/* <div>
                    <label>Country</label>
                    <select value={country} onChange={onhandleCountry}>
                    <option value="India">India</option>
                    <option value="England">England</option>
                    <option value="Usa">USA</option>
                    <option value="Afrika">Afrika</option>
                    </select>
                  
                </div> */}
                <h2>Product Title- {product.title}</h2>
                <h2>Product price- {product.price}</h2>
                <h2>Product category- {product.category}</h2>
                <h2>{JSON.stringify(product)}</h2>
                <button type='submit'>Submit</button>
            </form>
         
        </div>
    );
}

export default AddNewProduct;