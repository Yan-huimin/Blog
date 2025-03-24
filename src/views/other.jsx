import React, { Component } from 'react';
import '../CSS/other.css';
import NavBar from '../compontent/navbar';
import Footer from '../compontent/footer';
import Mode from '../compontent/mode';
import { NavLink } from 'react-router-dom';

class Other extends Component {
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
                            <div className="card toolList-body">
                                <h1 className='share-h1'>Share</h1>
                                <div className="card-body toolList-grid">

                                    <NavLink to={'/blog/mappingtools'} className={'mappingtools'}>
                                        <button type="button" class="btn btn-outline-secondary">Mapping tools</button>
                                    </NavLink>

                                    <NavLink to={'/blog/matrixcalculation'} className={'matrixcalculation'}>
                                        <button type="button" class="btn btn-outline-secondary">Matrix calculations</button>
                                    </NavLink>
                                    
                                    <NavLink to={'/blog/ancientpoem'} className={'ancientpoem'}>
                                        <button type="button" class="btn btn-outline-secondary">Ancient Poetry</button>
                                    </NavLink>

                                    <NavLink to={'/blog/deepseek'} className={'deepseek'}>
                                        <button type="button" class="btn btn-outline-secondary">  Deepseek  </button>
                                    </NavLink>
                                    
                                </div>
                            </div>
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

export default Other;