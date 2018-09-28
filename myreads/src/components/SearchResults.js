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
            <BooksContainer books={this.state.books} />
        );
    }
}

export default SearchResults;