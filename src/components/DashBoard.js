import React from 'react';

import Header from './Header';
import ProdouctList from './ProdouctList';
import User from './User';


function DashBoard(props) {
    //  console.log("data",data)
    return (
        <div>
            <Header></Header>
            <User></User>
            {/* <ProdouctList></ProdouctList> */}
        </div>
    );
}

export default DashBoard;