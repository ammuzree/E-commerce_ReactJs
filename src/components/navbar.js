import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

const Navbar = ()=>{
const [togl, setTogl] = useState(false);

return(
    <>
   
    <nav className='Nav'>
        <h1 className='navLogo'>Logo</h1>
        <ul className={togl ? 'navTogl':'nav-list'} onClick={()=>{setTogl(false)}}>
           <Link to="/" className='home'>
            <li>Home</li>
            </Link>
           
              <Link to='/shope' className='shope'> 
              <li>Shop </li>
              </Link>

              <Link to="/about" className='about'>
                <li>About </li>
                </Link>
                     
              <Link to="/contact" className='contact'>
                <li>Contact</li>
                </Link>       
            
             <Link to="/cart" className='cart'>
              <li>Cart</li>
              </Link>
           
        </ul>
        <button className='togleBtn' onClick={()=>{setTogl(!togl)}}>{togl ? <h1>X</h1> : <h1>=</h1>}</button>
    </nav>


    </>
    );
    
}
export default Navbar;