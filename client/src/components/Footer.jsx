import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
      <div className="footer">
        <div className="top">
          <div className="item">
            <h1 className='h1'>Categories</h1>
            <span className='span'>Fiction</span>
            <span className='span'>Non Fiction</span>
            <span className='span'>Literature</span>
            <span className='span'>Thriller & Mystery</span>
            <span className='span'>Mangas and Comics</span>
          </div>
          <div className="item">
            <h1 className='h1'>Links</h1>
            <span className='span'>FAQ</span>
            <span className='span'>Pages</span>
            <span className='span'>Stores</span>
            <span className='span'>Compare</span>
            <span className='span'>Cookies</span>
          </div>
          <div className="item">
            <h1 className='h1'>About</h1>
            <span className='span'>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
              amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
              ut labore etdolore.
            </span>
          </div>
          <div className="item">
            <h1 className='h1'>Contact</h1>
            <span className='span'>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
              amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
              ut labore etdolore.
            </span>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span className="logos">BookClub</span>
            <span className="copyright">
              © Copyright 2023. All Rights Reserved
            </span>
          </div>
          <div className="right">
            <img className='rightimg' src="/img/payment.png" alt="" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
