import React, { Component } from 'react'
import Display from './design/Display';
import Setting from './design/Setting';
import { storage } from '../config/firebaseConfig';

class Dashboard extends Component {
  state = {
    color: 'black',
    upperText: 'This is Upper Text',
    lowerText: 'This is Lower Text',
    memeImg: '',
    url: ''
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
          uploadImage={this.handleImage}
          />
        </div>
      </div>
      </div>
    )
  }
}
export default Dashboard;