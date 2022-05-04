import React from 'react'
import './Main.css'
import avtart from '../../assets/avater.png'
import Headersocials from './Headersocials'


function Main() {
  return (
       <div className='main-section'>
       <div className="container first_section">
       <div class="row">
          <div class="col-lg-6 or_m">
              <div class="profile_img">
                 <div class="child_div">
                 <img src={avtart} alt="" class="" />
                 <span class="line line_1"></span>
                 <span class="line line_2"></span>
                 <span class="line line_3"></span>
                 <span class="line line_4"></span>
                 <span class="line_ line_5"></span>
                 <span class="line_ line_6"></span>
                 <span class="line_ line_7"></span>
                 <span class="line_ line_8"></span>
                 </div>
              </div>
          </div>
          
          <div class="col-lg-6 or_m0">
              <div class="main_d">
              <div class="details">
              <h4 class="d-name">Hello I'm</h4>
              <h3 class="d-fullname">Akash Bhardwaj</h3>
              <h4 class="skill">Front End Developer</h4>
              <div class="butoon-section">
                  <button class="dowunload">Download CV</button>
                  <button class="let_talk">Let's Talk</button>
              </div>
           </div>
              </div>
          </div>
       </div>
       <Headersocials />
       <h3 className='scroll_down'>Scroll Down</h3>
       </div>
       </div>
  )
}

export default Main