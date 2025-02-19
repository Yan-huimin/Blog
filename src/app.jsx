import React, { Component } from 'react';
import About from './views/about';
import NotFound from './views/404notfound';
import Home from './views/home';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <Routes>
                <Route path='/blog/' element={<Home />}/>
                <Route path='/blog/home' element={<Home />}/>
                <Route path='/blog/about' element={<About />}/>
                <Route path='/blog/yhm' element={<About />}/>
                <Route path='/blog/404' element={<NotFound />}/>
                <Route path='/blog/*' element={<Navigate replace to="/blog/404" />} />
            </Routes>
        );
    }
}

export default App;