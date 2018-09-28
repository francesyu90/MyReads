import React, { Component } from 'react';
import '../App.css';

import GridList from '@material-ui/core/GridList';

import BookContainer from './BookContainer';

class BooksContainer extends Component {
    render() {

        const { books } = this.props; // 0: currently reading, 1: want to read, 2: read

        return (
            <div className="books-container">
                <GridList>
                    {books.map(book => (
                        <BookContainer key={book.id} book={book} />
                    ))}
                </GridList>
            </div>
        );
    }
}

export default BooksContainer;