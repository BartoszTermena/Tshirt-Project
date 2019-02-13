import React from 'react'
import { Link } from 'react-router-dom';
import {ButtonContainer} from './Button';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import styled from 'styled-components';


const SignedInLinks = (props) => {
  return (
    <React.Fragment>
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
        <a onClick={props.signOut} className="ml-auto">
            <ButtonContainer>
                Log Out
            </ButtonContainer>
        </a>
        </li>
        <li className="nav-item ml-2">
        <Link to="/" className="ml-auto">
            <ButtonInitials>
                {props.profile.initials}
            </ButtonInitials>
        </Link>
        </li>
        
    </ul>
    </React.Fragment>
  )
}
const ButtonInitials = styled.button`
  text-transform: capitalize;
  font-size: 1.2rem;
  background: transparent;
  border: 0.1rem solid var(--mainBlue);
  border-color: var(--mainYellow);
  color: var(--mainYellow);
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  margin: 0;
  &:focus {
    outline: none;
  }
`;

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(SignedInLinks);