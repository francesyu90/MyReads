import React, { Component } from 'react';

import * as BooksAPI from '../api/BooksAPI';
import BooksContainer from './BooksContainer';

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
                { this.state.books && this.state.books.length > 0 && <BooksContainer books={this.state.books} />}
            </div>
        );
    }
}

export default SearchResults;