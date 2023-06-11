import React, { useEffect, useState } from 'react'
import "./cart.css"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useSelector } from 'react-redux';
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from '../requestMethods';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useDispatch} from "react-redux";
import { deleteItem } from '../redux/cartRedux';
import { red } from '@mui/material/colors';
import { Link } from 'react-router-dom';


const KEY = process.env.REACT_APP_STRIPE;


const Cart = () => {

  const dispatch = useDispatch();
    let totalPrice = 0
const cart = useSelector(state => state.cart);
console.log(cart.products);
const navigate = useNavigate();


const [total,setTotal] =useState(0);


const handleCheckout = async() =>{



    const res = await userRequest.post('/stripe/create-checkout-session',{
    products:cart.products,
      quantity:cart.quantity,
      amount: totalPrice 


    }).then((res)=>{
        if(res.data.url){
            window.location.href = res.data.url
        }
    }).catch((err)=> console.log(err.message));
};


const getTotal = () => {
    let indPrice= 0
    
    cart.products.map(item => {
     indPrice = item.product.price * item.quantity;
     totalPrice += indPrice;
    })
    
    return {totalPrice}
  }

 




  return (
    <div>
        <Navbar />
          <div className='CartContainer'>
        <div className='CartWrapper'>
            <div className='cartHead'>YOUR BAG ({cart.products.length} ITEMS)</div>
           
            <div className='cat'>
               
            <div className='cartleft'>
                <div className='cartrow'>
                    <div className='cartcol'>
                         <span className='cartoptions'>PRODUCT</span>
                    </div>
                    <div className='cartcol'>
                         <span className='cartoptions'>PRICE</span>
                    </div>
                    <div className='cartcol'>
                         <span className='cartoptions'>QTY</span>
                    </div>
                    <div className='cartcol'>
                         <span className='cartoptions'>TOTAL</span>
                    </div>
                    <div className='cartcol'>
                        <span className='cartoptions'></span>
                    </div>
                </div>
                {cart.products.map((item)=>{
                 
                    return (
                         <div className='cartrow'>
                    <div className='cartcol'>
                        <img className='bookm' src={item.product.img} alt=''></img>
                          <span className='carttext'>{item.product.title}</span>
                    </div>
                    <div className='cartcol'>
                        <span className='cartoptions'>₹ {item.product.price}</span>
                    </div>
                  
                    
                    <div className='cartcol' id='addorsub'>
                        <button className='buttonadd'>-</button>
                        <span>{item.quantity}</span>
                        <button className='buttonsub'>+</button>
                    </div>
                    <div className='cartcol'>
                        <span className='cartoptions'>₹ {item.product.price * item.quantity }</span>
                    </div>
                    <div className='cartcol'>
                        <button className='cartDel' ><DeleteOutlineIcon sx={{ color: red[500] }}/></button>
                    </div>
                    
                    
                </div>
                    )
                })
                }
               
               
                
                    
                    
                
            </div>
            <div className='cartright'>
                <span className='summary'>Order Summary</span>
                <div className='orderinfo'>
                    <div className='orders'>
<span>Subtotal</span>
                 <span>₹ {getTotal().totalPrice}</span>   </div>
                    <div className='orders'><span>Shipping Charges</span> 
                    <span> 60</span></div>
                    <div className='orders'>
                        <span>Discount</span> <span>20</span></div>
                        <hr className='orderhr'/>
                    <div className='orders'><span id='total'>Subtotal </span> <span id='total'> ₹ {totalPrice}</span></div>
                    <hr className='orderhr'/>
                </div>
                
                     <button className='pay' onClick={handleCheckout}>CHECKOUT</button>
              
                    
                
                
                     <Link to="/" className="link">
                          <button className='pay'>CONTINUE SHOPPING</button>
                     </Link>
              
            </div>
            </div>
          
        </div>
      
    </div>
    <Footer />
    </div>
  
  )
}

export default Cart
