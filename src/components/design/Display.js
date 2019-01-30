import React from 'react'
import './Display.css';


const Display = ({display}) => {
  const {color, upperText, lowerText, memeImg} = display;
  const imgSrc = `../../img/${color}.png`
  return (
    <div className="card card-content">
      <div className="imgTshirt text-center">
        <img className="img-responsive" src={imgSrc} alt="black Tshirt" />
      </div>
      <div className="memeText text-center">
        <div className="upperText">
          <p>{upperText}</p>
        </div>
        <img src="../../img/400x300.png"
        alt="photo" />
        <div className="lowerText">
          <p>{lowerText}</p>
        </div>
      </div>
    </div>
  )
}
export default Display;