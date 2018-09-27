import React, { Component } from 'react';
import './App.css';

import CustomizedNavbar from './components/CustomizedNavbar';
import SearchBar from './components/SearchBar';

class App extends Component {
    render() {
        return (
            <div className="App">
                <CustomizedNavbar />
                <SearchBar />
            </div>
        );
    }
}

export default App;
