import React, { Component } from 'react';
import * as BooksAPI from '../api/BooksAPI';

import ListBooks from '../components/ListBooks';

class MainPage extends Component {

    state = {
        allBooks: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState(() => ({
                allBooks: books
            }));
        });
    }

    render() {

        const { allBooks } = this.state;

        return (
            <div className="main-page">
                <ListBooks books={allBooks} />
            </div>
        );
    }
}

export default MainPage;