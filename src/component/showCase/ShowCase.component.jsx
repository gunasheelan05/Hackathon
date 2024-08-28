import React from 'react'
import "./Showcase.css";
import firstImg from "../../assets/firstOne.png"
import secondImg from "../../assets/secondshoe.png"
import thirdImg from "../../assets/threeshoe.png"
import butLogo from "../../assets/buyLogo.png";


const ShowCase = () => {
  return (
    <>
       <div className='container-showcase'>
        <h6 className='text-casual'>CASUAL SHOES</h6>
        <div className='grid-container-showcase'>
            <div className='inner-container-child left-side'>
                <div className='container-img'></div>
                <img src={firstImg} alt="" className='img-shoe' />
                <div className='nike-title-header'>
                <p className='nike-shoe-name'>Nike Shoe</p>
                <p>Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry.</p>
                </div>
                <div className='inner-child-showcase'>
                <p>$234</p>
                <button className="btn-home">
                <img src={butLogo} className="button-logo-home" alt="butLogo" />
                <span className="buy-now-text">Buy Now</span>
                </button>
                </div>
            </div>
            <div className='inner-container-child left-side'>
                <div className='container-img'></div>
                <img src={secondImg} alt="" className='img-shoe' />
                <div className='nike-title-header'>
                <p className='nike-shoe-name'>Nike Shoe</p>
                <p>Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry.</p>
                </div>
                <div className='inner-child-showcase'>
                <p>$234</p>
                <button className="btn-home">
                <img src={butLogo} className="button-logo-home" alt="butLogo" />
                <span className="buy-now-text">Buy Now</span>
                </button>
                </div>
            </div>
            <div className='inner-container-child left-side'>
                <div className='container-img'></div>
                <img src={thirdImg} alt="" className='img-shoe' />
                <div className='nike-title-header'>
                <p className='nike-shoe-name'>Nike Shoe</p>
                <p>Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry.</p>
                </div>
                <div className='inner-child-showcase'>
                <p>$234</p>
                <button className="btn-home">
                <img src={butLogo} className="button-logo-home" alt="butLogo" />
                <span className="buy-now-text">Buy Now</span>
                </button>
                </div>
            </div>
        </div>
       </div>
    </>
  )
}

export default ShowCase;
