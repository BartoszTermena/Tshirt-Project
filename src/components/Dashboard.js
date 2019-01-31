import React, { Component } from 'react';
import Tshirts from './products/Tshirts';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Spinner from '../components/layout/Spinner';

class Dashboard extends Component {
  render() {
    const {tshirts} = this.props;
    let data;
    if (tshirts) {
     data = <div className="container-fluid py-5 ">
              <div className="row justify-content-center">
                {tshirts && tshirts.map(shirt => {
                  return (
                  <Tshirts key={shirt.id} shirt={shirt}/>
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