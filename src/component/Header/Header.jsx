import React from "react";
import penguinFasion from "../../assets/PENGUIN_FASION.png";
import douterPattern from "../../assets/DESIGN_PATTERN_OEN.png";
import "./Header.css"

const Header = () => {
  return (
    <>
    <div className="container-header">
      <div>
        <img src={penguinFasion} alt="companyHeader" className="company-logo" />
        <img src={douterPattern} alt="dot-design" className="dotted-design" />
      </div>
      <div>
        <ul className="ul-header">
            <li>Home</li>
            <li>Product</li>
            <li>About us</li>
            <li>Contact us</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Header;
