import React from 'react'
import "./trending.css"
import Cards from './Cards'

const Trending = () => {
    const Trend = [
        {
            id:"64842866ad68ea386e6cd748",
            title:"Atomic Habits",
            img:"assets/book4.jpg",
            author:"James Clear",
            price:"499",
            rating:4.5
        },
        {
            id:"64771f064a0c4d621cc0490e",
            title:"Ikigai",
            img:"assets/book5.jpg",
            author:"Hector Garcia",
            price:"399",
            rating:4.5
        },
        {
            id:'64771fd34a0c4d621cc04910',
            title:"Harry Potter and the Philosopher's Stone",
            img:"assets/book6.jpg",
            author:"J K Rowling",
            price:"499",
            rating:4.0
        },      
        
    ]
  return (
    <div className='newRel'>
       <span className='nrh'>TRENDING</span>
      {Trend?.map((item) => {  return(
  <div className='nritems'>
<Cards data={item} key={item.id} />
      </div>
      )}
    
         
      )}
    </div>
  )
}

export default Trending;
