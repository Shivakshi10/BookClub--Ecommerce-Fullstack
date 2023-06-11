import React from 'react'
import {useLocation} from "react-router-dom"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { userRequest } from '../requestMethods';
import { useEffect } from 'react';
import { useDispatch} from "react-redux";
import { reset } from '../redux/cartRedux';
import "./success.css";
import { Link } from 'react-router-dom';

const Success = () => {

  let totalPrice = 0;

const location = useLocation();
const cart = useSelector(state => state.cart);

const currentUser = useSelector((state) => state.user.currentUser);
console.log(cart);
  const [orderId, setOrderId] = useState(null);
  const dispatch = useDispatch();
  

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item.product._id,
            quantity: item.quantity,
          })),
          amount: getTotal().totalPrice,
          
        });
        setOrderId(res.data._id);
      } catch {}
    };
    //cart.products && totalPrice!=0 && createOrder();
    if(cart.quantity)
    {
      createOrder();
      console.log("Order Created");
    }

    }, [cart, currentUser]);

  useEffect(() =>{
    dispatch(reset());
  },[]);

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
      <div className='SucWrapper'>
        <div className='sucCont'>
          <div className='head'>Yay! Order Confirmed</div>
            <div className='successimg'>
              <img className='successimages' src='/assets/delivery.png' alt='' />
            </div>
            <span className='succText'>Our team is working to dispatch your product. You will soon be receiveing a confirmation email with the order details </span>
            <Link to="/" className="link">
              <button className='gotoHome'>Continue Shopping</button>
            </Link>
            
        </div>
      </div>
     
       <Footer />
    </div>
  )
}

export default Success
