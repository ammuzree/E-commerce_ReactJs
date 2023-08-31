import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from './components/Home';
import Shope from './components/Shope';
import About from './components/About';
import Contact from './components/Contact'
import Cart from './components/Cart';
import Error from './components/Error'


const App = ()=>{
  return(<>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route index element={<Home/>}/>
        <Route path="shope" element={<Shope/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="*" element={<Error/>}/>

    </Routes>
    </BrowserRouter>
    


    </>);
}

export default App;