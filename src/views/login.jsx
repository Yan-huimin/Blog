import React, { Component } from 'react';
import NavBar from '../compontent/navbar';
import { NavLink } from 'react-router-dom';
import Footer from '../compontent/footer';
import '../CSS/login.css';

class Login extends Component {
    state ={
        error_message: ''
    };

    render() {
        return (
        <React.Fragment>
                <div className="container">
                    <div className="card login-card">
                        <div className="card-body">
                            <form>
                                <h2 className='login-h1'>Log in</h2>
                                <hr />
                                <div className="mb-3">
                                    <label className="account-label">Account</label>
                                    <input type="account" className="form-control account-input" id="exampleInputEmail1"/>
                                </div>
                                <div className="mb-3">
                                    <label className="password-label">Password</label>
                                    <input type="password" className="form-control password-input" id="exampleInputPassword1"/>
                                </div>
                            </form>
                            <div className="error-message-login">
                                <p>
                                    {this.state.error_message}
                                </p>
                            </div>
                            <button type="submit" className="btn btn-primary login-submit-btn">登录</button>
                            <NavLink to='/blog/register' className='register-link'>
                                <p>No Account?</p>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <NavBar />
                <Footer />
        </React.Fragment>
        );
    }
}
 
export default Login;