import axios from 'axios';
import React, { Component } from 'react';

class ProductData extends Component {
    constructor(){
        super()
     this.state={productData:[]}

    }
    //
    componentDidMount(){

        axios.get('https://fakestoreapi.com/products').then(res=>{
         
           this.setState({productData:res.data})
           console.log("product",this.state.productData)
        }).catch(error=>{

        })
    }
    render() {
        const {productArray}=this.state
        console.log("productArray",productArray)
        return (
            <div>
                {
                       <div>
                       {  productArray.length ?
               productArray.map(product => 
                
                 <div>{product.title}</div>
               ):"data loading"
             }
                    data
                 </div>
                }
            </div>
        );
    }
}

export default ProductData;