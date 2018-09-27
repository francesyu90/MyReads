import React, { Component } from 'react';
import './App.css';

import CustomizedNavbar from './components/CustomizedNavbar';
import { Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import MainPage from './pages/MainPage';

class App extends Component {
    render() {
        return (
            <div className="App">
                <CustomizedNavbar />
                <Route exact path = "/" component={MainPage} />
                <Route exact path = "/search" component={SearchPage} />
            </div>
        );
    }
}

export default App;
