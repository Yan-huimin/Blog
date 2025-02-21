import React, { Component } from 'react';
import '../CSS/about.css';
import NavBar from '../compontent/navbar';
import Footer from '../compontent/footer';
import Mode from '../compontent/mode';

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
                            <h1>Here is Nothing!!!</h1>
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