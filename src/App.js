import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DashBoard from './components/DashBoard';
import ProductListData from './components/ProductListData';
import ProdouctList from './components/ProdouctList';
import Header from './components/Header'
import AddNewProduct from './components/AddNewProduct';
import NoPage from './components/NoPage';
import AboutUs from './components/AboutUs';

import Login from './components/Login';
import Register from './components/Register';
import React from 'react';
//import AboutUs from './components/AboutUs';
//import AboutUs from './components/AboutUs';
import ProductTable from './components/ProductTable';
import Customer from './components/Customer'
const LazyAbout=React.lazy(()=>import ('./components/AboutUs'))

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Header></Header>
            <Routes>
                <Route path="/" element={<DashBoard />}/>
                
                <Route path="list" element={<ProdouctList />} />
                <Route path="add" element={<AddNewProduct />} />
                <Route path="*" element={<NoPage />} />
                
            </Routes>
            </BrowserRouter> */}
            <BrowserRouter>
            <Header></Header>
            <Routes>
              <Route  path='/' element={<Customer></Customer>}   />
             
             
              {/* <Route path='/about' element={
              
              <React.Suspense fallback='Loading'>
                <LazyAbout/>
              </React.Suspense>
              
              
              }></Route> */}
              {/* <Route path='/about' element={<AboutUs></AboutUs>}></Route> */}
              <Route path='/' element={<React.Suspense  fallback='Loding'>
                <LazyAbout></LazyAbout>
              </React.Suspense>}>

              </Route>
              <Route path='/list' element={<ProdouctList/>}></Route>
              <Route path='*' element={<NoPage/>}></Route>
            </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
