import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


export default class Product extends Component {
  render() {
      const {title, price, img} = this.props.shirt;
    return (
      <ProductWrapper className="card-deck row mr-2">
        <div className="card-group ">
        <div className="card mt-4">
            <div className="img-container">
              <Link to="/details">
              <img src={img} alt="img" className="card-img-top" />
              </Link>
            </div>
          <div className="card-footer d-flex justify-content-between">
            <p className="text-card align-self-center mb-0">title </p>
            <h5 className="text-card mb-0">
              <span className="mr-1"> $</span>
              12.99
            </h5>
          </div>
        </div> 
        </div>
      </ProductWrapper>
    )
  }
}
Product.propTypes = {
  product: PropTypes.shape({
    id:PropTypes.number,
    img:PropTypes.string,
    titile:PropTypes.string,
    price:PropTypes.number,
    inCart:PropTypes.bool
  }).isRequired
};


const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 3s linerar;
    
  }
  .card-footer{
    background:transparent;
    border-top:transparent;
    transition: all 3s linerar;
  }
  &:hover{
    .card{
      border:0.04rem solid rgba(0,0,0,0.2);
      box-shadow: 2px 2px 5px 0 rgba(0,0,0,0.2);
    }
    .card-footer{
      background:rbga(247,247,247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top{
    transition: all 0.5s linear;
  }
  .img-container:hover .card-img-top{
    transform:scale(1.2);
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
`;