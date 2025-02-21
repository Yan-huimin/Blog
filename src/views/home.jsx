import React, { Component } from 'react';
import MyBody from '../compontent/mybody';
import Mode from '../compontent/mode';
import '../CSS/home.css';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div
                    className="home"
                    >
                    <MyBody />
                    <Mode DayOrNight={this.props.DayOrNight} ChangeMode={this.props.ChangeMode} />
                </div>
            </React.Fragment>
        );
    }
}

export default Home;