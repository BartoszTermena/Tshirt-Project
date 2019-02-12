import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }
    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.signUp(this.state);
    }
  render() {
      const { auth, authError } = this.props;
      if (auth.uid) return <Redirect to="/" />
    return (
        <div className="container-fluid py-5 ">
        <div className="row justify-content-center">
        
            <div className="card bg-light">
            <article className="card-body mx-auto" >
            <h4 className="card-title mt-3 text-center">You dont have an account yet? Sign Up</h4>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                    </div>
                    <input onChange={this.handleChange} id="firstName" className="form-control" placeholder="First name" type="text"/>
                </div> 
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                    </div>
                    <input onChange={this.handleChange} id="lastName" className="form-control" placeholder="Last name" type="text"/>
                </div> 
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                    </div>
                    <input onChange={this.handleChange} id="email" className="form-control" placeholder="Email address" type="email"/>
                </div> 
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                    </div>
                    <input onChange={this.handleChange} id="password" className="form-control" placeholder="Create password" type="password"/>
                </div>                                            
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
                </div>   
                <p className="text-center">Have an account? <a href="">Log In</a> </p>           
                { authError ? <p className="text-center text-danger">{authError}</p> : null }                                                                                                                       
            </form>
            </article>
            </div> 
        </div>
        </div>
    )
  }
}
const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth,
      authError: state.auth.authError
    }
  }
  
  const mapDispatchToProps = (dispatch)=> {
    return {
      signUp: (newUser) => dispatch(signUp(newUser))
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(SignUp)