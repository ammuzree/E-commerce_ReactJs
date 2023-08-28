import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from './Home';
import Shope from './Shope';
import About from './About';
import Contact from './Contact'
import Cart from './Cart';


const Header = ()=>{
    return(<>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route index element={<Home/>}/>
        <Route path="shope" element={<Shope/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="Cart" element={<Cart/>}/>

    </Routes>
    </BrowserRouter>
    


    </>);
}

export default Header;