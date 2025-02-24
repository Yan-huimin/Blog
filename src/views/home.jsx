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
                    <MyBody get_user_info={this.props.get_user_info} head_url={this.props.head_url} is_login={this.props.is_login} username={this.props.username} />
                    <Mode DayOrNight={this.props.DayOrNight} ChangeMode={this.props.ChangeMode} />
                </div>
            </React.Fragment>
        );
    }
}

export default Home;