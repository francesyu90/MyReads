import React, { Component } from 'react';

import * as BooksAPI from '../api/BooksAPI';
import BooksContainer from './BooksContainer';

class SearchResults extends Component {

    state = {
        books: [],
        allBooks: []
    }

    componentDidMount() {

        BooksAPI.getAll().then((books) => {
            this.setState(() => ({
                allBooks: books
            }));
        });

        BooksAPI.search(this.props.query).then((books) => {
            this.setState(() => ({
                books: books
            }));
        });
    }

    render() {

        const { allBooks, books } = this.state;

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