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
              <Route  path='/' element={<Login/>}   />
        
              <Route path='/about' element={<AboutUs/>}></Route>
              <Route path='/list' element={<ProdouctList/>}></Route>
              <Route path='*' element={<NoPage/>}></Route>
            </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
