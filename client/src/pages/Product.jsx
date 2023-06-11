import React, { useEffect, useState } from 'react'
import "./product.css"
import { Card, Rating, Typography } from '@mui/material'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PublicIcon from '@mui/icons-material/Public';
import DomainIcon from '@mui/icons-material/Domain';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../requestMethods';
import axios from 'axios';
import { addProduct } from '../redux/cartRedux';
import { useDispatch} from "react-redux";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Product = () => {

  const location = useLocation();
  const bookid = location.pathname.split("/")[2];
console.log(bookid);
  const [product,setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch()

  useEffect(()=>{
const getProduct = async() =>{
  try{
/*const res = publicRequest.get(`products/find/${bookid}`); */
const res = await axios.get(`http://localhost:5000/api/products/find/${bookid}`);

setProduct(res.data);
console.log(product);
  }catch (error) {
    console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
  }
}
getProduct();
  },[bookid]) ;

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };


  const handleClick = () =>{
    dispatch(addProduct({product:product, quantity}));

  };

  return (
    <div>
      <Navbar />
 <div className='product'>
        <div className='prodWrapper'>
             <div className='prodleft'>
                <img  className='mainImg' src={product.img} alt=''></img>
             </div>
        <div className='prodright'>
            <span className='prodTitle'>{product.title}</span>
            <span className='prodAuthor'>By {product.author}</span>
            <div className='Rate'>
                <span className='rr'>Rating: {product.rating}</span>
                <Typography component="legend"></Typography>
<Rating name="read-only" value={product.rating} readOnly />
            </div>
            <span className='prodPrice'>₹ {product.price}</span> 
            <div className='quantity'>
                        <button className='add' onClick={() => handleQuantity("dec")}>-</button>
                        <span className='quant'>{quantity}</span>
                        <button className='add' onClick={() => handleQuantity("inc")}>+</button>
                    </div>
            <div className='buttonss'>
                  <button className='addButton' onClick={handleClick}>Add to Cart</button>
            <button className='addButton'>Buy Now</button>
            </div>
          <p className='Descrip'>Description</p>
            <p className='desc'>{product.desc} </p>
            <hr />
            <div className="info">
              <div className='itemsbox'>
              <span className='pinfo'>Pages</span>
                <AutoStoriesIcon />
                <span className='pinfo'>{product.pages} pages</span>
              </div>
              <div className='itemsbox'>
              <span className='pinfo'>Language</span>
                <PublicIcon />
                <span className='pinfo'>{product.language}</span>
              </div>
              <div className='itemsbox'>
              <span className='pinfo'>Publishing</span>
                <DomainIcon />
                <span className='pinfo'>{product.publishing}</span>
              </div>
              <div className='itemsbox'>
              <span className='pinfo'>Publish Date</span>
                <CalendarTodayIcon />
                <span className='pinfo'>{product.date} </span>
              </div>
            </div>
            <hr />
            <div className="information">
              
            
              
              <span>Tags: </span>
              {product.category?.map((cat) =>{
                return (
                 <span className='catLines'>{cat} ,</span>
                )
              })}

              
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
         
        </div>
        </div>
       
    </div>
      <Footer />
    </div>
   
  )
}

export default Product;
