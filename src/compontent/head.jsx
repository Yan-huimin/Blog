import React, { Component } from 'react';
import '../CSS/head.css';

class Head extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <img src='https://i.miji.bid/2025/02/16/a1586ca7a468bac285bf6707676e0b41.png' className='head-logo' alt="logo" />
            </React.Fragment>
        );
    }
}

export default Head;