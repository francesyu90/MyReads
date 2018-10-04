import React, { Component } from 'react';

import ListBooks from '../components/ListBooks';

class MainPage extends Component {

    render() {

        return (
            <div className="main-page">
                <ListBooks />
            </div>
        );
    }
}

export default MainPage;