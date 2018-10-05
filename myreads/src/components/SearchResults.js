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

    assignBookToShelf(allBooks, books) {

        const allBookIds = allBooks.map(book => book.id);

        return books.map(book => {

            const bookIndex = allBookIds.indexOf(book.id);

            book.shelf = bookIndex? "none" : allBooks[bookIndex]

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
                                <BooksContainer books={this.assignBookToShelf(allBooks, books)} />
                            }
                        </div>
                    )}
                </AppContextConsumer>
                
            </div>
        );
    }
}

export default SearchResults;