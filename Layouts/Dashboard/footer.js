import React from 'react'
import Title from '../../Components/Title'
import { FaDiscord, FaTwitter,FaInstagram } from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';


export default function Footer() {
  return (
  <div className='footer'>
    <div className='d-flex justify-content-between col-md-10 m-auto top'>
    {/* <div className='col-lg-9 col-md-6 col-12'></div> */}
        <div className=''>
            <div className='d-flex dbd'>
                  <img src='img/footer.png' style={{marginRight:"26px"}} />
                  <div>
                  <Title type='foot'>digimi <br /> 2022</Title>
<div className='d-flex mt-5'>
  <FaDiscord size={30} className="me-3" />
  <FaTwitter size={30} className="me-3" />
  <FaInstagram size={30} className="me-3" />
  <SiGmail size={30} className="me-3" />
</div>
                  </div>
            </div>
          
            
        </div>

       <a href="#top"> <img src='img/top.png' style={{height:"100%", cursor:"pointer"}} /></a> 
     
    </div>
    

  </div>

  )
}