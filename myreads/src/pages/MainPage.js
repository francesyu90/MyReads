import React, { Component } from 'react';

import ListBooks from '../components/ListBooks';

class MainPage extends Component {

    render() {

        const { allBooks } = this.props;

        return (
            <div className="main-page">
                <ListBooks books={allBooks} />
            </div>
        );
    }
}

export default MainPage;