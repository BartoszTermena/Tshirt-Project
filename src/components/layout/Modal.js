import React, { Component } from 'react'
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';

const Modal = ({modal, handleModal, data}) => {
    console.log(data)
    const {author, color, lowerText, upperText, textColor, textSize, url} = data;
    const imgSrc = `../../img/${color}.png`;
    if(modal) {
    return (
        <ModalContainer>
            <div className="container">
            <div className="row">
                <div id="modal" className="col-12 mx-auto col-md-8 col-lg-6 col-sm-12 col-xs-8 text-center text-capitalize">
                    <h5 className="mt-5">Item added to the cart</h5>
                    <div className="card-group ">
                        <div className="card mt-4">
                            <div className="img-container">
                                <div className="card card-content align-items-center card-img-top" >
                                    <div className="imgTshirt text-center">
                                        <img className="card-img-top" src={`../../img/${color}.png`} alt="black Tshirt" />
                                    </div>
                                <div className="memeText text-center " >
                                <   div className="upperText mt-5">
                                        <p style={{fontSize: textSize*0.3, color: textColor}}>{upperText}</p>
                                        </div>
                                        <img className="size-img" src={`${url} || '../../img/400x300.png'`}
                                        alt="photo" />
                                        <div className="lowerText">
                                        <p style={{fontSize: textSize*0.3, color: textColor}}>{lowerText}</p>
                                    </div>
                                </div>
                                </div>
                                <div className="card-footer d-flex justify-content-between mt-4">
                                <p className="text-card align-self-center mb-0">{author}</p>
                                <h5 className="text-card mb-0 mt-4">
                                    <span className="mr-1"> $</span>
                                12.99
                                </h5>
                        </div>
                    </div>
                </div> 
                </div>
                <div className="mb-3">
                <ButtonContainer
                onClick={handleModal}
                >
                    Back to store
                </ButtonContainer>
                <Link to="/cart">
                <ButtonContainer
                cart
                onClick={handleModal}
                >
                    Add to cart
                </ButtonContainer>
                </Link>
                </div>
            </div>
        </div>
    </div>
        </ModalContainer>
        )
    } else {
        return null;
    }
}


const ModalContainer = styled.div`
   z-index:999;
   position: fixed;
   text-align:center;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: rgba(0,0,0,0.2);
   display: flex;
   align-items: center;
   justify-content: center;
   #modal {
       background: var(--secondary-color);
       box-shadow: 10px 15px rgba(0,0,0,0.07);
       border-radius: 3px;
   }
   .card {
    border-color: transparent;
  }
  .card-footer{
    background:transparent;
    border-top:transparent;
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top{
    top: 20px;
    max-width: 650px !important;
    max-heihgt: 600px !important;
  }
  .cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding: 0.2rem 0.4rem;
    background: var(--mainBlue);
    border: none;
    color: var(--secondary-color);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.5s linear;
    &:focus {
      outline: none;
    }
  }
  .cart-btn:hover {
    color: var(--primary-color);
    cursor:pointer;
  }
  .imgTshirt {
    position: relative;
}
.memeText {
    position: absolute;
    top: 50px;
}
.memeText img {
    max-width: 500px;
    max-height: 550px;
    border: #fff solid 6px;
}
.memeText p {
    font-family: Impact, sans-serif;
    color: #fff;
}
.lowerText p {
  font-size:26px !important;
}
.upperText p {
  font-size:26px !important;
}
.size-img {
  max-width: 220px !important;
  max-height: 230px !important;
}

`;
export default Modal;