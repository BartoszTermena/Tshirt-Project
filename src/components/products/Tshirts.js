import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from '../layout/Modal';
import Spinner from '../layout/Spinner';

export default class Product extends Component {
  state = {
    openModal: false
  }
  handleModal = () => {
    this.setState({
      openModal: !this.state.openModal
    })
  }
  render() {
      const {author, color, createdAt, lowerText, textColor, textSize, upperText, url} = this.props.shirt;
      return (
      <Fragment> 
        <Modal 
        handleModal={this.handleModal} 
        modal={this.state.openModal}
        data={this.props.shirt}/>
      <ProductWrapper className="card-deck row mr-2" onClick={this.handleModal}>
        <div className="card-group ">
        <div className="card mt-4">
        <div className="img-container">
          <div className="card card-content align-items-center card-img-top" >
            <div className="imgTshirt text-center">
              <img className="card-img-top" src={`../../img/${color}.png`} alt="black Tshirt" />
            </div>
                  <div className="memeText text-center " >
                    <div className="upperText">
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
        
         
      </ProductWrapper>
      </Fragment>
    )
  }
}

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all s linerar;
  }
  .card-footer{
    background:transparent;
    border-top:transparent;
    transition: all 3s linerar;
  }
  &:hover{
    .card{
      box-shadow: 2px 2px 5px 0 rgba(0,0,0,0.2);
    }
    .card-footer{
      background:rbga(247,247,247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
    cursor:pointer;
  }
  .card-img-top{
    top: 20px;
    transition: all 0.5s linear;
    max-width: 250px;
    max-heihgt: 300px;
  }
  .img-container:hover .card-img-top{
    transform:scale(1.05);
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
  .img-container:hover .cart-btn {
    transform: translate(0, 0)
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
    max-width: 300px;
    max-height: 400px;
    border: #fff solid 3px;
}
.memeText p {
    font-family: Impact, sans-serif;
    color: #fff;
}
.lowerText p {
  font-size:12px;
}
.upperText p {
  font-size:12px;
}
.size-img {
  max-width: 90px !important;
  max-height: 100px !important;
}

`;