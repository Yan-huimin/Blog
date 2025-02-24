import React, { Component } from 'react';
import '../CSS/mybody.css';
import Head from './head';
import Code from './code';
import AppLogo from './applogo';
import Footer from './footer';
import NavBar from './navbar';
import Down from './down';
import Mode from './mode';

class MyBody extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div className='na'>
                    <NavBar />
                    <Mode />
                </div>
                <div className="container">
                    <div className="col">
                        <Head get_user_info={this.props.get_user_info} head_url={this.props.head_url} is_login={this.props.is_login} url={'https://i.miji.bid/2025/02/16/a1586ca7a468bac285bf6707676e0b41.png'} />
                    </div>
                    <div className="col">
                        <Code username={this.props.username} is_login={this.props.is_login} />
                    </div>
                    <div className="col">
                        <AppLogo />
                    </div>
                    <div className="col">
                        <Down />
                    </div>
                    <div className='col'>
                        <Footer />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default MyBody;