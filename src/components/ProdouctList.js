import React, { useState } from 'react';
import data from '../data/product.json'
import '../styles/product.css'
function ProdouctList(props) {
    const[productList,setProduct]=useState(data)
    console.log("productList",productList)
    return (
        <div>
            Product List
            <div >
              {
                productList.map(product=>{

                    return(
                        <div >

                            <div class="card ">
                            
                            <div class="card-body product">
                            <img  src={product.image} class="card-img-top prod-img" alt="..."/>
                                <h5 class="card-title">{product.price}</h5>
                                <p class="card-text">{product.title}</p>
                               
                            </div>
                            <a  href="#" class="add-to-cart btn btn-primary">AddToCart</a>
                    </div>
                        </div>
                    )
                })
              }
            </div>
        </div>
    );
}

export default ProdouctList;