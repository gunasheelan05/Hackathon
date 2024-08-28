import React from 'react'
import "./Footer.component.css"
import footer from "../../assets/main_right.png";
import firstLeft from "../../assets/left_first.png";

const Footer = () => {
  return (
    <>
      <div className='container-footer'>
        <div>
            <div>
            </div>
            <div></div>
            <div></div>
        </div>
        <div className='right-side-main'>
            <img src={footer}  width={"500px"} alt="" />
        </div>
      </div>       
    </>
  )
}

export default Footer;
