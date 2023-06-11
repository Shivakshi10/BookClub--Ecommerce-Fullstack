import React, { useEffect, useState } from 'react'
import "./list.css"
import { Card, Rating, Typography } from '@mui/material'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from "axios";

const List = ({category,maxPrice,sort}) => {
   console.log(category,maxPrice,sort);
   const [products,setProducts] = useState([]);
   const [filteredproducts,setFilteredProducts] = useState([]);
   const [finalp,setFinalp] = useState([]);
   
   

   useEffect(()=>{
    const getProducts = async () =>{
      try{
        const res = await axios.get(category === "All" ? `http://localhost:5000/api/products`:`http://localhost:5000/api/products?category=${category}` );
       
        setProducts(res.data);
       setFinalp(res.data);
      }catch(err){

      }
    }

   
    getProducts();
   

    
     
   },[category]);

 


   useEffect(()=>{
  
    if(maxPrice){
      setFilteredProducts(products.filter((curelem)=> curelem.price <= maxPrice));
      setFinalp([]);
    }


    
   },[category,maxPrice]);

   useEffect(()=>{
    if(sort === null)
    {}
    if((sort === 'asc')){
      setFilteredProducts((prev)=>
      [...prev].sort((a,b) => a.price - b.price)
      );
    } else  if((sort === 'desc')){
      setFilteredProducts((prev)=>
      [...prev].sort((a,b) => b.price - a.price)
      );
    }
   })


 
    const Books=[
        {
          id:1,
          title:"Pride And Prejudice",
          img:"/assets/book1.jpg",
          author:"Jane Austen",
          price:"499",
          rating:4.2
        },
        {
          id:2,
          title:"Seven Husbands of Evelyn Hugo",
          img:"/assets/book2.jpg",
          author:"Taylor Jenkins Reid",
          price:"699",
          rating:4.0
        },
        {
          id:3,
          title:"The Murder Of Roger Ackroyd",
          img:"/assets/book3.jpg",
          author:"Agatha Christie",
          price:"399",
          rating:3.0
        },
      ]

      
  return (
   <div className='List'>
 {finalp?.map((data) => {
        return (
    <div className='listele'>
       <Link to={`/product/${data._id}`} className="link">
                  <div className='listleft'>
      <div className='imgdiv'>
             <img className='bookm' src={data.img} alt=''></img>
      </div>
        
    </div>
                </Link>
                <Link to={`/product/${data._id}`} className="link">
                  <div className='listright'>
      <Typography component="legend"></Typography>
<Rating name="read-only" value={data.rating} readOnly />
        <span className='bookl'>{data.title}</span>
        <span className='bookas'>{data.author}</span>
        <span className='bookl'>₹{data.price}</span>
        <button className='addtocarts'>Add to Cart</button>
      </div>
                </Link>
     
    </div>
        )
    })}
    {filteredproducts?.map((data) => {
        return (
    <div className='listele'>
       <Link to={`/product/${data._id}`} className="link">
                  <div className='listleft'>
      <div className='imgdiv'>
             <img className='bookm' src={data.img} alt=''></img>
      </div>
        
    </div>
                </Link>
                <Link to={`/product/${data._id}`} className="link">
                  <div className='listright'>
      <Typography component="legend"></Typography>
<Rating name="read-only" value={data.rating} readOnly />
        <span className='bookl'>{data.title}</span>
        <span className='bookas'>{data.author}</span>
        <span className='bookl'>₹{data.price}</span>
        <button className='addtocarts'>Add to Cart</button>
      </div>
                </Link>
     
    </div>
        )
    })}
   </div>
  )
}

export default List
