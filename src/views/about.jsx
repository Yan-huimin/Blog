import React, { Component } from 'react';
import '../CSS/about.css';
import NavBar from '../compontent/navbar';
import Footer from '../compontent/footer';

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
                            <hr />
                        </div>
                        <div className="col">
                            <Footer />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default About;