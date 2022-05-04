import React from 'react'
import me from '../../assets/avater.jpeg'
import './About.css'

import { FaAward } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import { FaFolderMinus } from 'react-icons/fa';
const About = () => {
  return (
    <div className='about_section' id='about'>
                    
      <div class="container-fluid">
      <h5 class="same_h">Get To Know</h5>
                    <h3 class="same_h_t">About Me</h3>
          <div class="row justify-content-center">
          <div class="col-lg-8 order_2">
               <div class="about_detail">
                    
                    <div class="about_box_d">
                        <div class="row justify-content-center">
                            <div class="col-xl-4 col-md-5 col-sm-5">
                                <div class="ab_box">
                                    <span class="icons_a"><FaAward /></span>
                                    <h4 class="ab_h">Experience</h4>
                                    <h5 class="ab_h_t">1+ Year Working</h5>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-5 col-sm-5">
                            <div class="ab_box">
                                <span class="icons_a"><FaUserFriends /></span>
                                <h4 class="ab_h">Clients</h4>
                                <h5 class="ab_h_t">25+</h5>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-5 col-sm-5">
                        <div class="ab_box">
                            <span class="icons_a"><FaFolderMinus /></span>
                            <h4 class="ab_h">Projects</h4>
                            <h5 class="ab_h_t">30+ Completed</h5>
                        </div>
                    </div>
                        </div>
                        <div class="disc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <button class="let_talk">Let's Talk</button>
                        </div>
                    </div>
               </div>
          </div>
          <div class="col-md-4 order_1">
          <div class="about_img_box">
              <div class="about_box_">
              <img src={me} alt="" class="about_me" />
              </div>
          </div>
      </div>
          </div>
      </div>
    </div>
  )
}

export default About
