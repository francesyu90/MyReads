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

        const { books } = this.state;

        const { allBooks } = this.props;

        const allBookIds = allBooks.map(book => book.id);
        
        const filteredBooks = books.filter(book => allBookIds.indexOf(book.id) < 0);

        return(
            <div>
                { this.state.books && this.state.books.length > 0 && <BooksContainer books={filteredBooks} />}
            </div>
        );
    }
}

export default SearchResults;