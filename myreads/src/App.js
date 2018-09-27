import React, { Component } from 'react';
import './App.css';

import CustomizedNavbar from './components/CustomizedNavbar';

class App extends Component {
    render() {
        return (
            <div className="App">
                <CustomizedNavbar />
            </div>
        );
    }
}

export default App;
