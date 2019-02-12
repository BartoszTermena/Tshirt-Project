import React from 'react'
import { Link } from 'react-router-dom';
import {ButtonContainer} from './Button';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';


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
        <Link to="/" className="ml-auto">
            <ButtonContainer>
                {props.profile.initials}
            </ButtonContainer>
        </Link>
        </li>
        <li className="nav-item ml-2">
        <Link to="/cart" className="ml-auto">
            <ButtonContainer>
                My 🛒
            </ButtonContainer>
        </Link>
        </li>
        <li className="nav-item ml-2">
        <a onClick={props.signOut} className="ml-auto">
            <ButtonContainer>
                Log Out
            </ButtonContainer>
        </a>
        </li>
    </ul>
    </React.Fragment>
  )
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(SignedInLinks);