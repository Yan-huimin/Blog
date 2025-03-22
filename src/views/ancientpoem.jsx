import React, { Component } from 'react';
import Awating from '../compontent/awaiting';
import Footer from '../compontent/footer';
import Mode from '../compontent/mode';
import NavBar from '../compontent/navbar';

class AncientPoem extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div className="container">
                    <NavBar/>
                    <h1>Poem</h1>
                    <Awating/>
                    <Footer/>
                    <Mode DayOrNight={this.props.DayOrNight} ChangeMode={this.props.ChangeMode} />
                </div>
            </React.Fragment>
        );
    }
}

export default AncientPoem;