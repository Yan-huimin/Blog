import React, { Component } from 'react';
import '../CSS/mybody.css';
import Head from './head';
import Code from './code';
import AppLogo from './applogo';
import Footer from './footer';
import NavBar from './navbar';
import Down from './down';

class MyBody extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div className='na'>
                    <NavBar />
                </div>
                <div className="container">
                    <div className="col">
                        <Head />
                    </div>
                    <div className="col">
                        <Code />
                    </div>
                    <div className="col">
                        <AppLogo />
                    </div>
                    <div className="col">
                        <Down />
                    </div>
                    <div className='col'>
                        <hr />
                        <Footer />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default MyBody;