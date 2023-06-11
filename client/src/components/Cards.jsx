import React from 'react'
import "./card.css"
import StarIcon from '@mui/icons-material/Star';
import { yellow } from '@mui/material/colors';
import { Rating, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { addProduct } from '../redux/cartRedux';
import { useDispatch} from "react-redux";

const Cards = ({data}) => {


  const dispatch = useDispatch()
  const handleClick = () =>{
    dispatch(addProduct({product:data, quantity:1}));

  };


   
  return (
    <div className='card'>
      <div className='cleft'>
      <Link className="lin" to={`/product/${data.id}`}>
        <img className='bookm' src={data.img} alt=''></img>
      </Link>
        
      </div>
      <div className='cright'>
      <Typography component="legend"></Typography>
<Rating name="read-only" value={data.rating} readOnly />
        <span className='bookt'>{data.title}</span>
        <span className='booka'>{data.author}</span>
        <span className='bookt'>₹{data.price}</span>
        <button className='addtocart' onClick={handleClick}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Cards
