import React,{useState} from 'react'
import './Nav.css'
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
export const Nav = () => {
    const [activeNav, setActivenav] = useState('#')
  return (
    <div class="left_nav">
    <ul class="left_nav_l">
    <li class=""><a href='#' onClick={()=> setActivenav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a></li>
    <li class=""><a href='#about' onClick={()=> setActivenav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a></li>
    <li class=""><a href='#experience' onClick={()=> setActivenav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a></li>
    <li class=""><a href='#service' onClick={()=> setActivenav('#service')} className={activeNav === '#service' ? 'active' : ''}><RiServiceLine /></a></li>
    <li class=""><a href='#contact' onClick={()=> setActivenav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a></li>
   
</ul>
    </div>
  )
}
