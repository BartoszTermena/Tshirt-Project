import React, { Component } from 'react'

export default class SignUp extends Component {
  render() {
    return (
        <div className="container-fluid py-5 ">
        <div className="row justify-content-center">
        
            <div className="card bg-light">
            <article className="card-body mx-auto" >
            <h4 className="card-title mt-3 text-center">Sign Up</h4>
                <form>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                    </div>
                    <input name="" className="form-control" placeholder="Choice your username" type="text"/>
                </div> 
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                    </div>
                    <input name="" className="form-control" placeholder="Email address" type="email"/>
                </div> 
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                    </div>
                    <input className="form-control" placeholder="Create password" type="password"/>
                </div> 
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                    </div>
                    <input className="form-control" placeholder="Repeat password" type="password"/>
                </div>                               
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
                </div>   
                <p className="text-center">Have an account? <a href="">Log In</a> </p>                                                                 
            </form>
            </article>
            </div> 
        </div>
        </div>
    )
  }
}
