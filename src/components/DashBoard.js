import React from 'react';

import Header from './Header';
import ProdouctList from './ProdouctList';
import User from './User';
import ProductListData from './ProductListData';


function DashBoard(props) {
    //  console.log("data",data)
    return (
        <div>
            <Header></Header>
            {/* <User></User> */}
            <ProductListData></ProductListData>
            {/* <ProdouctList></ProdouctList> */}
        </div>
    );
}

export default DashBoard;