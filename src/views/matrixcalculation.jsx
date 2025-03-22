import React, { Component } from 'react';
import Matrix from '../compontent/matrix';
import Awating from '../compontent/awaiting';
import Footer from '../compontent/footer';
import Mode from '../compontent/mode';
import NavBar from '../compontent/navbar';

class MatrixCalculation extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div className="container">
                    <NavBar/>
                    <Matrix />
                    <Awating />
                    <Footer/>
                    <Mode DayOrNight={this.props.DayOrNight} ChangeMode={this.props.ChangeMode} />
                </div>
            </React.Fragment>
        );
    }
}
 
export default MatrixCalculation;