import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/head.css';

class Head extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <NavLink to='/blog/login'>
                    <img src='https://i.miji.bid/2025/02/16/a1586ca7a468bac285bf6707676e0b41.png' className='head-logo' alt="logo" />
                </NavLink>
            </React.Fragment>
        );
    }
}

export default Head;