import React from 'react'
import { Link } from 'react-router-dom';
import {ButtonContainer} from './Button';

const SignedOutLinks = () => {
  return (
    <React.Fragment>
    <ul className="navbar-nav align-items-center ml-auto">
        <li className="nav-item ml-2">
        <Link to="/signin" className="ml-auto">
            <ButtonContainer>
                Log In
            </ButtonContainer>
        </Link>
        </li>
        <li className="nav-item ml-2">
        <Link to="/signup" className="ml-auto">
            <ButtonContainer>
                Sign Up
            </ButtonContainer>
        </Link>
        </li>
    </ul>
    </React.Fragment>
  )
}
export default SignedOutLinks;