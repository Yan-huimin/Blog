import React, { Component } from 'react';
import './CSS/app.css';
import About from './views/about';
import NotFound from './views/404notfound';
import Home from './views/home';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Login from './views/login';
import Register from './views/register';
import $ from 'jquery';
import Other from './views/other';
import { getCookie } from './utils/utils';
import AncientPoem from './views/ancientpoem';
import MappingTools from './views/mappingtools';
import MatrixCalculation from './views/matrixcalculation';
import Deepseek from './views/deepseek';

class App extends Component {
    state = { 
        DayOrNight: true,
        is_login: false,
        head_url: '',
        username: '',
    };

    ChangeMode = () => {
        this.setState({
            DayOrNight: !this.state.DayOrNight
        });
     };

    get_user_info = (Head_url, Username) => {
        this.setState({
            head_url: Head_url,
            username: Username,
        })
    }

    componentDidMount() {
        $.ajax({
            url: 'https://yhmyo.cn/blog/get_status/',
            type: 'POST',
            headers: {
                "X-CSRFToken": getCookie('csrftoken') 
            },
            xhrFields: {
                withCredentials: true 
            },
            dataType: 'json',
            success: resp => {
                if(resp.result === 'login') {
                    this.setState({
                        is_login: true,
                        username: resp.username,
                        head_url: resp.head_url
                    });
                } else {
                    this.setState({
                        is_login: false,
                        username: '',
                        head_url: ''
                    });
                }
            },
            error: function(xhr, status, error) {
                console.error('请求失败:', status, error);
            }
        });

        fetch('https://yhmyo.cn/blog/get_csrf_token/', {
            method: 'GET',
            credentials: 'include',
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    }

    render() { 
        return (
            <Routes>
                <Route path='/blog/' element={<Home DayOrNight={this.state.DayOrNight} ChangeMode={this.ChangeMode} />}/>
                <Route path='/blog/login' element={this.state.is_login ? <Navigate replace to={`/blog/home`}/> : <Login get_user_info={this.get_user_info} DayOrNight={this.state.DayOrNight} ChangeMode={this.ChangeMode} />} />
                <Route path='/blog/register' element={this.state.is_login ? <Navigate replace to={`/blog/home`}/> : <Register DayOrNight={this.state.DayOrNight} ChangeMode={this.ChangeMode} />} />
                <Route path='/blog/home' element={<Home get_user_info={this.get_user_info} head_url={this.state.head_url} username={this.state.username} is_login={this.state.is_login} DayOrNight={this.state.DayOrNight} ChangeMode={this.ChangeMode} />}/>
                <Route path='/blog/about' element={<About DayOrNight={this.state.DayOrNight} ChangeMode={this.ChangeMode} />}/>
                <Route path='/blog/yhm' element={<Other DayOrNight={this.state.DayOrNight} ChangeMode={this.ChangeMode} />}/>
                <Route path='/blog/ancientpoem' element={<AncientPoem DayOrNight={this.state.DayOrNight} ChangeMode={this.ChangeMode} />}/>
                <Route path='/blog/mappingtools' element={<MappingTools DayOrNight={this.state.DayOrNight} ChangeMode={this.ChangeMode} />}/>
                <Route path='/blog/matrixcalculation' element={<MatrixCalculation DayOrNight={this.state.DayOrNight} ChangeMode={this.ChangeMode} />}/>
                <Route path='/blog/deepseek' element={<Deepseek DayOrNight={this.state.DayOrNight} ChangeMode={this.ChangeMode} />}/>
                <Route path='/blog/404' element={<NotFound DayOrNight={this.state.DayOrNight} ChangeMode={this.ChangeMode} />}/>
                <Route path='/blog/*' element={<Navigate replace to="/blog/404" />} />
            </Routes>
        );
    }
}

export default App;