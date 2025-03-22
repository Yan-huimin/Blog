import React, { Component } from 'react';
import NavBar from '../compontent/navbar';
import { NavLink } from 'react-router-dom';
import Footer from '../compontent/footer';
import $ from 'jquery';
import '../CSS/login.css';
import { getCookie } from '../utils/utils';

class Login extends Component {
    state ={
        error_message: '',
        username: '',
        password: '',
    };

    handlLoginClick = e => {
        this.setState({error_message: ''});
        e.preventDefault();
        if(this.state.username === '' || this.state.password === ''){
            this.setState({error_message: '账号或密码不能为空......'});
        }else if(this.state.username === this.state.password){
            this.setState({error_message: '账号与密码不能一致......'});
        }else {
            $.ajax({
                url: "https://yhmyo.cn/blog/login/",
                type: "post",
                data: {
                    username: this.state.username,
                    password: this.state.password,
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer your_token_here', // 如果需要认证
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
                        this.props.get_user_info(resp.head_url, resp.username);
                        window.location.href="/blog/home";
                    } else {
                        this.setState({error_message: resp.result});
                    }
                },
                error: () => {
                    alert('系统正在升级维护中,请稍后重试.');
                    this.setState({error_message: '登录失败，请稍后再试。'});
                }
            });
        }
    }

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
                                    <input onChange={e => {this.setState({username: e.target.value})}} type="text" className="form-control account-input"/>
                                </div>
                                <div className="mb-3">
                                    <label className="password-label">Password</label>
                                    <input onChange={e => {this.setState({password: e.target.value})}} type="password" className="form-control password-input"/>
                                </div>
                            </form>
                            <div className="error-message-login">
                                <p>
                                    {this.state.error_message}
                                </p>
                            </div>
                            <button onClick={this.handlLoginClick} type="button" className="btn btn-primary login-submit-btn">登录</button>
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