import React, { Component } from 'react';
import './CSS/app.css';
import About from './views/about';
import NotFound from './views/404notfound';
import Home from './views/home';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Login from './views/login';
import Register from './views/register';

class App extends Component {
    state = { 
        DayOrNight: true,
    };

    ChangeMode = () => {
        this.setState({
            DayOrNight: !this.state.DayOrNight
        });
     };

    render() { 
        return (
            <Routes>
                <Route path='/blog/' element={<Home DayOrNight={this.state.DayOrNight} ChangeMode={this.ChangeMode} />}/>
                <Route path='/blog/login' element={<Login DayOrNight={this.state.DayOrNight} ChangeMode={this.ChangeMode} />}/>
                <Route path='/blog/register' element={<Register DayOrNight={this.state.DayOrNight} ChangeMode={this.ChangeMode} />}/>
                <Route path='/blog/home' element={<Home DayOrNight={this.state.DayOrNight} ChangeMode={this.ChangeMode} />}/>
                <Route path='/blog/about' element={<About DayOrNight={this.state.DayOrNight} ChangeMode={this.ChangeMode} />}/>
                <Route path='/blog/yhm' element={<About DayOrNight={this.state.DayOrNight} ChangeMode={this.ChangeMode} />}/>
                <Route path='/blog/404' element={<NotFound DayOrNight={this.state.DayOrNight} ChangeMode={this.ChangeMode} />}/>
                <Route path='/blog/*' element={<Navigate replace to="/blog/404" />} />
            </Routes>
        );
    }
}

export default App;