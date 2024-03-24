import React from 'react';

import Header from './Header';
import ProdouctList from './ProdouctList';
import User from './User';
import ProductListData from './ProductListData';
import ProductData from './ProductData';
import ProductDetails from './ProductDetails';


function DashBoard(props) {
    //  console.log("data",data)
    return (
        <div>
            {/* <ProductData></ProductData> */}
            <ProductDetails></ProductDetails>
            {/* <Header></Header>
            <User></User> */}
            {/* <ProductListData></ProductListData> */}
            {/* <ProdouctList></ProdouctList> */}
        </div>
    );
}

export default DashBoard;