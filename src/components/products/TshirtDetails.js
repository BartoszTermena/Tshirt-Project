import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Spinner from '../layout/Spinner'
import {ButtonContainer} from '../layout/Button';
import {Link} from 'react-router-dom';
import styled from 'styled-components'

const TshirtDetails = (props) => {
    const {shirt} = props;

    if(shirt) {
        return (
            <TshirtWrapper>
            <div className="container-fluid py-5">
            <div className="row justify-content-center ml-1">
            <div className="col-1"></div>
                <div className="card card-content align-items-center">
                    <div className="imgTshirt text-center">
                    <img className="img-responsive" src={`../../img/${shirt.color}.png`} alt="black Tshirt" />
                    </div>
                    <div className="memeText text-center" >
                    <div className="upperText">
                        <p style={{fontSize: shirt.formatText, color: shirt.textColor}}>{shirt.upperText}</p>
                    </div>
                    <img className="size-img" src={`${shirt.url}`} />
                    
                    <div className="lowerText">
                        <p style={{fontSize: shirt.formatText, color: shirt.textColor}}>{shirt.lowerText}</p>
                    </div>
            </div>
      </div>
      <div className="col-1"></div>
      <div className="text-center">
      <hr />
      <h4>Author: {shirt.author}</h4>
      <h4>Price: 12.99$</h4>
      <hr />
      <br />
        <ButtonContainer
        >
            Back to store
        </ButtonContainer>
        <Link to="/cart">
        <ButtonContainer
        >
            Add to cart
        </ButtonContainer>
        </Link>
        </div>
        </div>
      </div>
      </TshirtWrapper>
        )
    } else {
        return (
            <div className="container py-5">
            <Spinner />
           
            </div>
        )
    }
  
}
const mapStateToProps = (state, ownProps) => {
    console.log(state)
    const id = ownProps.match.params.id;
    const tshirts = state.firestore.data.tshirts;
    const shirt = tshirts ? tshirts[id] : null;
    return {
        shirt: shirt
    };
}
const TshirtWrapper = styled.div`
.imgTshirt {
    position: relative;
}
.imgTshirt img {
    max-width: 550px !important;
}
.memeText {
    position: absolute;
    top: 110px;
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
    margin-top: 3px;
    font-size: 25px;
}
.upperText p {
    font-size: 25px;
}
.size-img {
    max-width: 250px !important;
    max-height: 350px !important;
}

`;

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'tshirts'}
    ])
)(TshirtDetails);