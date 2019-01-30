import React, { Component } from 'react'
import Display from './design/Display';
import Setting from './design/Setting';

class Dashboard extends Component {
  state = {
    color: 'black',
    upperText: 'This is Upper Text',
    lowerText: 'This is Lower Text',
    memeImg: ''
  }
  handleColor = e => {
    this.setState({
      color : e.target.id
    })
  }
  handleText = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div className="container py-5">
      <div className="row">
        <div className="col-lg-8">
          <Display display={this.state}/>
        </div>
        <div className="col-lg-4">
          <Setting 
          color={this.handleColor}
          text={this.handleText}
          />
        </div>
      </div>
      </div>
    )
  }
}
export default Dashboard;