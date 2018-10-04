import React, { Component } from 'react';

import * as BooksAPI from '../api/BooksAPI';
import BooksContainer from './BooksContainer';

import { AppContextConsumer } from '../App';

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

    filterBooks(allBooks, books) {

        const allBookIds = allBooks.map(book => book.id);
        
        return books.filter(book => allBookIds.indexOf(book.id) < 0);
    }

    render() {

        const { books } = this.state;

        return(
            <div>
                <AppContextConsumer>
                    { ({ allBooks }) => (
                        <div>
                            { this.state.books && this.state.books.length > 0 && <BooksContainer books={this.filterBooks(allBooks, books)} />}
                        </div>
                    )}
                </AppContextConsumer>
                
            </div>
        );
    }
}

export default SearchResults;