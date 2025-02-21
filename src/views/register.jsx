import React, { Component } from 'react';
import NavBar from '../compontent/navbar';
import { NavLink } from 'react-router-dom';
import Footer from '../compontent/footer';
import '../CSS/register.css';

class Register extends Component {
    state ={
        error_message: ''
    };

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className="container">
                    <div className="card register-card">
                        <div className="card-body">
                            <form>
                                <h2 className='register-h1'>Register</h2>
                                <hr />
                                <div className="mb-3">
                                    <label className="account-label-register">Account</label>
                                    <input type="account" className="form-control account-input-register" id="exampleInputEmail1"/>
                                </div>
                                <div className="mb-3">
                                    <label className="password-label-register">Password</label>
                                    <input type="password" className="form-control password-input-register" id="exampleInputPassword1"/>
                                </div>
                                <div className="mb-3">
                                    <label className="confirm-password-label-register">Confirm Password</label>
                                    <input type="password" className="form-control confirm-password-input-register" id="exampleInputPassword1"/>
                                </div>
                            </form>
                            <div className="error-message-register">
                                <p>
                                    {this.state.error_message}
                                </p>
                            </div>
                            <button type="submit" className="btn btn-primary register-submit-btn">注册</button>
                            <NavLink to='/blog/login' className='login-link'>
                                <p>Already have an account?</p>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default Register;