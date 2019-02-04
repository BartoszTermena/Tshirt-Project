import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';

const Navbar = (props) => {
  const { auth } = props;
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/" className="logo-img">
          <img 
          
          src="img/logo.jpg"
          className="navbar-brand"
          alt="logo"/>
        </Link>
          {links}
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
  return {
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps)(Navbar)