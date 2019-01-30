import React from 'react'
import './Display.css';


const Display = ({display, formatText}) => {
  const {color, upperText, lowerText, url, textColor} = display;
  const imgSrc = `../../img/${color}.png`
  return (
    <div className="card card-content">
      <div className="imgTshirt text-center">
        <img className="img-responsive" src={imgSrc} alt="black Tshirt" />
      </div>
      <div className="memeText text-center">
        <div className="upperText">
          <p style={{fontSize: formatText, color: textColor}}>{upperText}</p>
        </div>
        <img src={`${url}` || '../../img/400x300.png'}
        alt="photo" />
        <div className="lowerText">
          <p style={{fontSize: formatText, color: textColor}}>{lowerText}</p>
        </div>
      </div>
    </div>
  )
}
export default Display;