import React, { Component } from 'react';
import NavBar from '../compontent/navbar';
import { NavLink } from 'react-router-dom';
import Footer from '../compontent/footer';
import '../CSS/register.css';
import { getCookie } from '../utils/utils';
import $ from 'jquery';

class Register extends Component {
    state ={
        error_message: '',
        username: '',
        password: '',
        confirm_password: '',
    };

    handRegisterClick = e => {
        this.setState({error_message: ''});
        e.preventDefault();
        if(this.state.username === '' || this.state.password === ''){
            this.setState({error_message: '账号或密码不能为空......'});
        }else if(this.state.confirm_password === '') {
            this.setState({error_message: '请确认输入密码......'});
        }else if(this.state.username.length < 6 || this.state.password.length < 6){
            this.setState({error_message: '账号或密码长度不能小于6位......'});
        }else if(this.state.username === this.state.password){
            this.setState({error_message: '账号与密码不能一致......'});
        }else if(this.state.password !== this.state.confirm_password){
            this.setState({error_message: '两次密码输入不一致......'});
        }else {
            $.ajax({
                url: "https://yhmyo.cn/blog/register/",
                type: "post",
                data: {
                    username: this.state.username,
                    password: this.state.password,
                    confirm_password: this.state.confirm_password,
                },
                dataType: "json",
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));// 添加 CSRF token
                },
                xhrFields: {
                    withCredentials: true, // 携带 Cookie
                },
                success: resp => {
                    if (resp.result === "success") {
                        alert('注册成功，请登录。');
                        window.location.href="/blog/login";
                    } else {
                        this.setState({error_message: resp.result});
                    }
                }
            });
        }
    }

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
                                    <input onChange={e => {this.setState({username: e.target.value})}} type="account" className="form-control account-input-register"/>
                                </div>
                                <div className="mb-3">
                                    <label className="password-label-register">Password</label>
                                    <input onChange={e => {this.setState({password: e.target.value})}} type="password" className="form-control password-input-register"/>
                                </div>
                                <div className="mb-3">
                                    <label className="confirm-password-label-register">Confirm Password</label>
                                    <input onChange={e => {this.setState({confirm_password: e.target.value})}} type="password" className="form-control confirm-password-input-register"/>
                                </div>
                            </form>
                            <div className="error-message-register">
                                <p>
                                    {this.state.error_message}
                                </p>
                            </div>
                            <button onClick={this.handRegisterClick} type="button" className="btn btn-primary register-submit-btn">注册</button>
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