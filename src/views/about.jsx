import React, { Component } from 'react';
import '../CSS/about.css';
import NavBar from '../compontent/navbar';
import Footer from '../compontent/footer';
import Mode from '../compontent/mode';
import Author from '../compontent/author';

class About extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div className="container">
                    <div className="na">
                        <NavBar />
                    </div>
                    <div className="na1">
                        <div className="col">
                            <img 
                            style={{width: '8vw', height: '8vw', borderRadius: '50%'}}
                            src='https://i.miji.bid/2025/02/23/8bdb36fe633fac411fab7a04420dd2ee.jpeg' alt='yhm'/>
                            <Author />
                        </div>
                        <div className="col">
                            <Footer />
                        </div>
                    </div>
                    <Mode DayOrNight={this.props.DayOrNight} ChangeMode={this.props.ChangeMode} />
                </div>
            </React.Fragment>
        );
    }
}

export default About;