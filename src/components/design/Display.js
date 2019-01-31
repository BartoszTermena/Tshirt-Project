import React, { Component } from 'react';
import Spinner from '../layout/Spinner'

import './Display.css';


class Display extends Component {
  
  render(){
    const {display, formatText} = this.props;
    const {color, upperText, lowerText, url, textColor} = display;
    const imgSrc = `../../img/${color}.png`;
    let Displayimg;
    if (url === 'loading') {
      Displayimg = <Spinner primary/>
    } else {
      Displayimg = <img className="size-img" src={`${url}` || '../../img/400x300.png'} />
    }
    return (
      <div className="card card-content align-items-center" >
        <div className="imgTshirt text-center">
          <img className="img-responsive" src={imgSrc} alt="black Tshirt" />
        </div>
        <div className="memeText text-center" >
          <div className="upperText">
            <p style={{fontSize: formatText, color: textColor}}>{upperText}</p>
          </div>
          {Displayimg}
        
          <div className="lowerText">
            <p style={{fontSize: formatText, color: textColor}}>{lowerText}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Display;