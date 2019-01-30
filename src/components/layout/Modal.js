import React, { Component } from 'react'
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';

const Modal = ({modal, handleModal, data}) => {
    const {title, img, price} = data;
    if(modal) {
    return (
        <ModalContainer>
            <div className="container">
                <div className="row">
                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                        <h5 className="mt-5">Item added to the cart</h5>
                        <img src={img} alt="product" className="img-fluid"/>
                        <h6>{title}</h6>
                        <h6 className="text-muted">Price: ${price}</h6>
                        
                        <div className="mb-3">
                        <ButtonContainer
                        onClick={handleModal}
                        >
                            Ok!
                        </ButtonContainer>
                        <Link to="/cart">
                        <ButtonContainer
                        cart
                        onClick={handleModal}
                        >
                            Go to the cart
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
   color: var(--mainDark);
   display: flex;
   align-items: center;
   justify-content: center;
   #modal {
       background: var(--secondary-color);
       box-shadow: 10px 15px rgba(0,0,0,0.07);
       border-radius: 3px;
   }
`;
export default Modal;