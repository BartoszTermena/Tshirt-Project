import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.signIn(this.state)
    }
  render() {
      const {authError} = this.props;
    return (
        <div className="container-fluid py-5 ">
        <div className="row justify-content-center">
            <div className="card bg-light">
            <article className="card-body mx-auto" >
            <h4 className="card-title mt-3 text-center">To Create Your Own T-Shirt Please Sign In</h4>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                    </div>
                    <input onChange={this.handleChange} id="email" className="form-control" placeholder="Email" type="email"/>
                </div> 
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                    </div>
                    <input onChange={this.handleChange} id="password" className="form-control" placeholder="Password" type="password"/>
                </div>                             
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block"> LOGIN </button>
                </div>
                <div className="form-group text-danger text-break">
                    <h6>{authError ? authError : null}</h6>
                </div>                                                    
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
        authError: state.auth.authError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);