import React from 'react';

import Header from './Header';
import ProdouctList from './ProdouctList';


function DashBoard(props) {
    //  console.log("data",data)
    return (
        <div>
            <Header></Header>
            <ProdouctList></ProdouctList>
        </div>
    );
}

export default DashBoard;