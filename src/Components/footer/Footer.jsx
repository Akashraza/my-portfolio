import React from 'react'
import './Footer.css'
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
export const Footer = () => {
  return (
    <div className='footer_c'>
   
    <h3 class="same_h_t same_h_t_">AkashBhardwaj</h3>
    <ul class="footer_link">
        <li class=""><a href='#' >Home</a></li>
        <li class=""><a href='#' >About Me</a></li>
        <li class=""><a href='#' >Experience</a></li>
        <li class=""><a href='#' >Services</a></li>
        <li class=""><a href='#' >Portfolio</a></li>
        <li class=""><a href='#' >Contact</a></li>
    </ul>
    <ul class="soccials_link">
        <li class=""><a href='#'><FaLinkedin /></a></li>
        <li class=""><a href='#'><FaFacebookSquare /></a></li>
        <li class=""><a href='#'><FaInstagramSquare /></a></li>
    </ul>
    <div class="f_bottom">
        <p>© AKASH | All Rights Reserved.</p>
    </div>
    </div>
  )
}
