import React from 'react';
import './footer.css';
import { SocialIcon } from 'react-social-icons';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left col-md-4 col-sm-6">
        <div className="icons">
          <SocialIcon url="https://www.linkedin.com/in/vicky-vasilopoulou-52230111b/" color='black' target='_blank'/>
          <SocialIcon url="https://github.com/Viki-Robles" target='_blank'/>
        </div>
      </div>
      <div className="footer-center col-md-4 col-sm-6">
        <div>
          <i className="fa fa-map-marker"></i>
          <p><span> 15b Hlidreth Street, Balham</span> London, United Kingdom</p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p> (+44) 7438577974</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p><a href="#"> vasiliki.robles@gmail.com</a></p>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        <p className="menu">
          <a href="#"> Home</a> |
      <a href="#services"> Services</a> |
      <a href="#"> Portfolio</a>
        </p>
        <p className="name"> VALARR &copy; 2020</p>
      </div>
    </footer>
  )
}
