import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import { connect } from 'react-redux';

const Navbar = () => {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/" className="logo-img">
          <img 
          
          src="img/logo.jpg"
          className="navbar-brand"
          alt="logo"/>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-2">
            <Link to="/create" className="nav-link">
            <ButtonContainer>
               Create 👕
            </ButtonContainer>
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav align-items-center ml-auto">
          <li className="nav-item ml-2">
            <Link to="/cart" className="ml-auto">
              <ButtonContainer>
                 My 🛒
              </ButtonContainer>
            </Link>
          </li>
          <li className="nav-item ml-2">
            <Link to="/cart" className="ml-auto">
              <ButtonContainer>
                 Logout
              </ButtonContainer>
            </Link>
          </li>
        </ul>
          
      </NavWrapper>
    )
  }

const NavWrapper = styled.nav`
  background: var(--secondary-color);
  border-bottom: 0.1rem solid #e1e4e8;
  .nav-link {
    color: var(--secondary-color) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  .logo-img img {
    width: 65px;
    border-radius: 45%;
    height: 65px;
  }
`;

const mapStateToProps = state => {
  console.log(state)
  return {

  }
}
export default connect(mapStateToProps)(Navbar)