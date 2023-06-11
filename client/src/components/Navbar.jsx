import React from 'react'
import "./navbar.css"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";

const Navbar = () => {

const quantity = useSelector(state =>state.cart.quantity)
console.log(quantity);

  return (
    <div className='Container'>
      <div className='Nleft'>
        <Link to="/" className="link">
          <span className='logo'>BookClub</span>
        </Link>
        
      </div>
      <div className='NCentre'>
        <span className='options'>Home</span>
        <Link to='/products/All' className='link'>
          <span className='options'>Shop</span>
          </Link> 
        
        <span className='options'>Ebooks</span>
        
      </div>
      <div className='NRight'>
        
        <MoreVertIcon className='icons'/>
         <AccountCircleIcon className='icons'/>
         <div className='cartIcon'>
            <Link to="/cart" className='link' >
          <ShoppingBagIcon className='icons'/>
         </Link>
         <span className='cartspan'>{quantity}</span>
         </div>
       
        
       
      </div>
    </div>
  )
}

export default Navbar
