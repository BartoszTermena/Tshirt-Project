import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';


class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src=""  
          className="navbar-brand"
          alt="logo"/>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-2">
            <Link to="/create" className="nav-link">
            <ButtonContainer>
              <i className="fas fa-mobile"></i> Create Tshirt
            </ButtonContainer>
            </Link>
          </li>
        </ul>
          <Link to="/" className="ml-auto">
            <ButtonContainer>
              <i className="fas fa-cart-plus"></i> My Cart
            </ButtonContainer>
          </Link>
      </NavWrapper>
    )
  }
}
const NavWrapper = styled.nav`
  background: var(--secondary-color);
  border-bottom: 0.1rem solid #e1e4e8;
  .nav-link {
    color: var(--secondary-color) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;


export default Navbar