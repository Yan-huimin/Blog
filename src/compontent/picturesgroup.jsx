import React, { Component } from 'react';
import '../CSS/picturesgroup.css';

class PicturesGroup extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                    <div className="card">
                        <div className="card-body">
                        <div id="carouselExampleIndicators" className="carousel slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img 
                                    src="https://i.miji.bid/2025/02/24/b35cced9cb7abda86b437e45c57139a7.jpeg" 
                                    className="d-block w-100" 
                                    alt="a" />
                                </div>
                                <div className="carousel-item">
                                <img 
                                    src="https://i.miji.bid/2025/02/24/30b837d2d328d0f6c56a61a38fc5b96c.jpeg" 
                                    className="d-block w-100" 
                                    alt="b"/>
                                </div>
                                <div className="carousel-item">
                                <img 
                                    src="https://i.miji.bid/2025/02/24/eadf8ca3986aa05047fb974aa7831c47.jpeg"
                                    className="d-block w-100" 
                                    alt="c"/>
                                </div>
                            </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        );
    }
}

export default PicturesGroup;