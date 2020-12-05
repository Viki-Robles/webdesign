import React from 'react';
import './footer.css';
import { SocialIcon } from 'react-social-icons';


export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer-left col-md-4 col-sm-6">
        <div class="icons">
          <SocialIcon url="https://www.linkedin.com/in/vicky-vasilopoulou-52230111b/" color='black' target='_blank'/>
          <SocialIcon url="https://github.com/Viki-Robles" target='_blank'/>
        </div>
      </div>
      <div class="footer-center col-md-4 col-sm-6">
        <div>
          <i class="fa fa-map-marker"></i>
          <p><span> 15b Hlidreth Street, Balham</span> London, United Kingdom</p>
        </div>
        <div>
          <i class="fa fa-phone"></i>
          <p> (+44) 7438577974</p>
        </div>
        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="#"> vasiliki.robles@gmail.com</a></p>
        </div>
      </div>
      <div class="footer-right col-md-4 col-sm-6">
        <p class="menu">
          <a href="#"> Home</a> |
      <a href="#"> Services</a> |
      <a href="#"> Portfolio</a>
        </p>
        <p class="name"> VALARR &copy; 2020</p>
      </div>
    </footer>
  )
}
