import React, { Component } from 'react';
import Tshirts from './products/Tshirts';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Spinner from '../components/layout/Spinner';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

class Dashboard extends Component {
  render() {
    const {tshirts} = this.props;
    let data;
    if (tshirts) {
     data = <div className="container-fluid py-5 ">
              <div className="row justify-content-center">
                {tshirts && tshirts.map(shirt => {
                  return (
                    <WrapperLink to={`/${shirt.id}`}>
                      <Tshirts key={shirt.id} shirt={shirt}/>
                    </WrapperLink>
                  )
                })}
              </div>
             </div>
    } else {
      data = <div className="container-fluid py-5 mt-5">
                <div className="row justify-content-center">
                  <Spinner />
                </div>
              </div>
    }
    return (
        <React.Fragment>
             Dashboard
          {data}
      </React.Fragment>
    )
  }
}
const WrapperLink = styled(Link)`
  text-decoration: none !important;
  color: black;
`
const mapStateToPropst = (state) => {

  return {
    tshirts: state.firestore.ordered.tshirts
  }
}
export default compose(
  connect(mapStateToPropst),
  firestoreConnect([
    { collection: 'tshirts' }
  ])
)(Dashboard);