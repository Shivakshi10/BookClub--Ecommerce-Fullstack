
import React, { useState } from 'react'
import List from '../components/List'
import { useLocation, useParams } from 'react-router-dom'
import "./products.css"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Products = () => {


   const [maxPrice,setMaxprice] = useState(1000);
   const [sort,setSort]  = useState(null)
  
  const location = useLocation();
  const cat = location.pathname.split("/")[2]

   
  return (
   <div>
    <Navbar />
    <div className='products'> 
        <div className='pleft'>
            <div className='filterItem'>
                <h2 className='h2'>Categories</h2>
                <div className='inputItem'>
                    <input type='checkbox' id='1' value={1}  />
                    <label htmlFor='1'>Fiction</label>
                </div>
                <div className='inputItem'>
                    <input type='checkbox' id='2' value={2} />
                    <label htmlFor='2'>Non-Fiction</label>
                </div>
                <div className='inputItem'>
                    <input type='checkbox' id='3' value={3} />
                    <label htmlFor='3'>Romance</label>
                </div>
                <div className='inputItem'>
                    <input type='checkbox' id='4' value={4}/>
                    <label htmlFor='4'>Self Help</label>
                </div>
                <div className='inputItem'>
                    <input type='checkbox' id='5' value={5} />
                    <label htmlFor='5'>Mangas</label>
                </div>
                <div className='inputItem'>
                    <input type='checkbox' id='6' value={6} />
                    <label htmlFor='6'>Thriller</label>
                </div>
                <div className='inputItem'>
                    <input type='checkbox' id='7' value={7} />
                    <label htmlFor='7'>Literature</label>
                </div>
                <div className='inputItem'>
                    <input type='checkbox' id='8' value={8} />
                    <label htmlFor='8'>Mystery</label>
                </div>
                <div className='inputItem'>
                    <input type='checkbox' id='9' value={9} />
                    <label htmlFor='9'>YA</label>
                </div>
                
            </div>
            <div className='filterItem'>
            <h2 className='h2'>Filter By Price</h2>
            <div className='inputItem'>
                <span className='ins'>0</span>
                <input type='range' min={0} max={1000} onChange={(e)=>setMaxprice(e.target.value)}/>
                <span>{maxPrice}</span>
            </div>
            </div>
            <div className='filterItem'>
            <h2 className='h2'>Sort By</h2>
            <div className='inputItem'>
                <input type='radio' id='asc' value="asc" name='price' onChange={e=>setSort("asc")}/>
                <label htmlFor='asc'>Price (Lowest first)</label>
            </div>
            <div className='inputItem'>
                <input type='radio' id='desc' value="desc" name='price'onChange={e=>setSort("desc")}/>
                <label htmlFor='desc'>Price (Highest first)</label>
            </div>
            </div>

        </div>
      <div className='pright'>
        <span className='ptext'>Showing Results:</span>
        <List  category={cat} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
    <Footer />
   </div>
    
  ) 
}

export default Products
