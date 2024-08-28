import React from "react";
import HomeLogo from "../../assets/SHOUES.png";
import butLogo from "../../assets/buyLogo.png";
import "./Home.component.css";

const HomePage = () => { 
  return(
    <>
     <div className="container-landing">
        <div className="left-side-landing">
            <img src={HomeLogo} className="logo-home" alt="logo-header" />
        </div>
        <div className="right-side-landing">
            <h6 className="nike-logo">NIKE REACT</h6>
            <h6 className="run-logo">INFINITY RUN 2</h6>
            <p className="lorem-home">Lorem Ipsum is simply dummy text of the printing
                <span className="lorem-br">and typesetting industry.</span></p>
            <button className="btn-home">
                <img src={butLogo} className="button-logo-home" alt="butLogo" />
                <span className="buy-now-text">Buy Now</span>
            </button>
        </div>
     </div>
    </>
  )
}

export default HomePage;