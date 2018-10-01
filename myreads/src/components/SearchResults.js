import React, { Component } from 'react';

import * as BooksAPI from '../api/BooksAPI';
import ListBooks from './ListBooks';

class SearchResults extends Component {

    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.search(this.props.query).then((books) => {
            this.setState(() => ({
                books: books
            }));
        });
    }

    render() {
        return(
            <div>
                { this.state.books && this.state.books.length > 0 && <ListBooks books={this.state.books} />}
            </div>
        );
    }
}

export default SearchResults;