import React from 'react'
import './Contact.css'
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { FaWhatsapp } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';

export const Contact = () => {
  return (
    <div className='contact_bx' id='contact'>
    <h5 class="same_h">Get In Touch</h5>
    <h3 class="same_h_t same_h_t_">Contact</h3>
    <div class="container p_100px">
        <div class="row">
            <div class="col-md-7">
                <div class="contact_f">
                <form>
                <div class="mb-3">
                  <input type="text" class="form-control" placeholder='Your Full Name' />
                </div>
                <div class="mb-3">
                <input type="email" class="form-control" placeholder='Your Email' />
                </div>
                <div class="mb-3">
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Your Message'></textarea>
                </div>
                <button type="submit" class="btn submit">Submit</button>
              </form>
                </div>
            </div>
            <div class="col-md-5">
             <div class="row justify-content-center">
                 <div class="col-12">
                     <div class="contact_bx_child">
                         <span class="one_c"><AiOutlineMail /></span>
                        <span class="two_c">Email</span>
                    <span class="three_c">akashbhardwaj81005@gmail.com</span>
                    <span class="four_c">send a message</span>
                     </div>
                 </div>
                 <div class="col-12">
                 <div class="contact_bx_child">
                     <span class="one_c"><FaFacebookMessenger /></span>
                    <span class="two_c">Messenger</span>
                <span class="three_c">akashbhardwaj81005@gmail.com</span>
                <span class="four_c">send a message</span>
                 </div>
             </div>
             <div class="col-12">
             <div class="contact_bx_child">
                 <span class="one_c"><FaWhatsapp /></span>
                <span class="two_c">WhatsApp</span>
            <span class="three_c">9889226111</span>
            <span class="four_c">send a message</span>
             </div>
         </div>
             </div>
            </div>
        </div>
    </div>
    </div>
  )
}
