import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import "./home.css"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchIcon from '@mui/icons-material/Search';
import Cards from '../components/Cards';
import { Rating, Typography } from '@mui/material';
import Categories from '../components/Categories';
import Trending from '../components/Trending';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { addProduct } from '../redux/cartRedux';
import { useDispatch} from "react-redux";

const Home = () => {
  const [book,setBook] = useState(0);
 
  const Books=[
    {
      id:'647720534a0c4d621cc04912',
      title:"Pride And Prejudice",
      img:"assets/book1.jpg",
      author:"Jane Austen",
      price:"499",
      rating:4.2
    },
    {
      id:'647720f84a0c4d621cc04914',
      title:"Seven Husbands of Evelyn Hugo",
      img:"assets/book2.jpg",
      author:"Taylor Jenkins Reid",
      price:"699",
      rating:4.0
    },
    {
      id:'647721654a0c4d621cc04916',
      title:"The Murder Of Roger Ackroyd",
      img:"assets/book3.jpg",
      author:"Agatha Christie",
      price:"399",
      rating:3.0
    },
  ]

const handleSub = () =>{
  if(book === 0)
  setBook(2);
  else 
  setBook(book-1);
}

const handleAdd = () =>{
  if(book === 2)
  setBook(0);
  else
  setBook(book+1);
}

const dispatch = useDispatch()
  const handleClick = () =>{
    dispatch(addProduct({product:Books[book], quantity:1}));

  };

  return (
    <div>
        <Navbar />
     <div className='homeContainer'>
        <div className='homeWrapper'>
            <div className='hleft'>
                <h1 className='hhead'>BestSellers</h1>
                <p className='hpara'>Not sure what to read next?Explore our Catalog of Public Domain Books</p>
                <input className='searchb' type='text' placeholder='Title,Authors or Topics'></input>
            </div>
            <div className='hcentre'>
            <div className='colorcircle'>
            <Link className="lin" to={`/product/${Books[book].id}`}>
 <img className='himg' src={Books[book].img} alt=''></img>
            </Link>
                   
                </div>
            
            </div>
            <div className='hright'>
            <Typography component="legend"></Typography>
<Rating name="read-only" value={Books[book].rating} readOnly />
              <h1 className='btitle'>{Books[book].title}</h1>
              <h4>by {Books[book].author}</h4>
              <div className='offer'>
                <p className='price'>₹{Books[book].price}</p>

                <button className='addcart' onClick={handleClick}>Add to Cart</button>
              </div>
            </div>
           
        </div>
        <div className='navigator'>
        <button className='nvg' onClick={handleSub}><ArrowBackIosNewIcon /></button>
        <button className='nvg' onClick={handleAdd}><ArrowForwardIosIcon /></button>  
          
        </div>
     </div>
     <div className='newRel'>
      <span className='nrh'>NEW RELEASES</span>
      {Books?.map((item) => {  return(
  <div className='nritems'>
<Cards data={item} key={item.id} />
      </div>
      )}
    
         
      )}
   
     </div>
     <hr className='under'></hr>
     <Trending />
     <Categories />
     <Contact />
     <Footer />
    </div>
  )
}

export default Home
