import React, { Component } from 'react';

import BooksContainer from './BooksContainer';
import { AppContextConsumer } from '../App';

import * as BooksAPI from '../api/BooksAPI';

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

    assignShelfToBook(allBooks, books) {

        return books.map(book => {

            const found = allBooks.find(aBook => aBook.id === book.id);

            book.shelf = found? found.shelf : "none";

            return book;
        });
    }

    render() {

        const { books } = this.state;

        return(
            <div>
                <AppContextConsumer>
                    { ({ allBooks }) => (
                        <div>
                            { 
                                this.state.books && 
                                this.state.books.length > 0 && 
                                <BooksContainer books={this.assignShelfToBook(allBooks, books)} />
                            }
                        </div>
                    )}
                </AppContextConsumer>
                
            </div>
        );
    }
}

export default SearchResults;