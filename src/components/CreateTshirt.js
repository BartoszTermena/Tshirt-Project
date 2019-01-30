import React, { Component, Fragment } from 'react';
import Display from './design/Display';
import Setting from './design/Setting';
import { storage } from '../config/firebaseConfig';

class Dashboard extends Component {
  state = {
    color: 'black',
    upperText: 'This is Upper Text',
    lowerText: 'This is Lower Text',
    url: '',
    textSize: 42,
    textColor: 'white'
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
  handleImage = e => {
    if (e.target.files[0]) {
      const image = (e.target.files[0]);
      const uploadTask = 
      storage.ref(`images/${image.name}`)
      .put(image);
      uploadTask.on('state_changed', 
      (snapshot => {
        console.log(snapshot);
      },
      (err) => {
        console.log(err)
      }, 
      () => {
        storage.ref('images')
        .child(image.name)
        .getDownloadURL()
        .then(url => {
          this.setState({
            url
          })
        })
      }))
    }
  }
  handleTextSize = e => {
    this.setState({
      textSize: e.target.value
    })
  }
  formatText = () => {
    const size = this.state.textSize;
    return parseInt(size);
  }
  handleTextColor = e => {
    this.setState({
      textColor: e.target.value
    })
  }
  render() {
    return (
      <Fragment>
     
      <div className="container py-5">
      <div className="row">
        <div className="col-lg-8">
          <Display 
          display={this.state}
          formatText={this.formatText()}
          />
        </div>
        <div className="col-lg-4">
          <Setting 
          color={this.handleColor}
          text={this.handleText}
          uploadImage={this.handleImage}
          textSize={this.handleTextSize}
          textColor={this.handleTextColor}
          />
        </div>
      </div>
      </div>
      </Fragment>
    )
  }
}
export default Dashboard;