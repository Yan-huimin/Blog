import React, { Component } from 'react';
import '../CSS/head.css';
import $ from 'jquery';
import { getCookie } from '../utils/utils';

class Head extends Component {
    state = {  }

    handleLogout = () => {
        $.ajax({
            url: "https://yhmyo.cn/blog/logout/",
            type: 'post',
            headers: {
                "X-CSRFToken": getCookie('csrftoken')  
            },
            xhrFields: {
                withCredentials: true 
            },
            success: resp => {
                if(resp.result === 'success'){
                    window.location.href='/blog/home';
                }
            }
        });
    }

    render() { 
        return (
            <React.Fragment>
                <div onClick={this.props.is_login ? this.handleLogout : () => window.location.href = '/blog/login'}>
                    <img src={this.props.is_login ? this.props.head_url : 'https://i.miji.bid/2025/02/16/a1586ca7a468bac285bf6707676e0b41.png'} className='head-logo' alt="logo" />
                </div>
            </React.Fragment>
        );
    }
}

export default Head;