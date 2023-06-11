import React from 'react'
import "./categories.css"

import { Link } from 'react-router-dom'

const Categories = () => {
  
  return (
    <div className='categorie'>
      <span className='cathead'>Explore By Genres</span>
      <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="assets/c1.webp"
            alt=""
            className='img'
          />
          <button className='button'>
            <Link className="link" to='/products/All'>
              All
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="assets/c2.webp"
            alt=""
            className='img'
          />
          <button className='button'>
            <Link to="/products/Non-Fiction" className="link">
              Non Fiction
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="assets/c3.webp"
            alt=""
            className='img'
          />
          <button className='button'>
            <Link to="/products/Self-Help" className="link">
              Self Help
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="assets/c4.webp"
                alt=""
                className='img'
              />
              <button className='button'>
                <Link to="/products/Literature" className="link">
                  Literature
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="assets/c5.jpg"
                alt=""
                className='img'
              />
              <button className='button'>
                <Link to="/products/Manga" className="link">
                  Mangas and Comics
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="assets/c6.jpg"
            alt=""
            className='img'
          />
          <button className='button'>
            <Link to="/products/Thriller" className="link">
              Thriller & Supernatural
            </Link>
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Categories
