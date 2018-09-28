import React, { Component } from 'react';
import '../App.css';

import GridList from '@material-ui/core/GridList';

import BookContainer from './BookContainer';

class BooksContainer extends Component {
    render() {

        const { category } = this.props; // 0: currently reading, 1: want to read, 2: read

        return (
            <div className="books-container">
                <GridList>
                    <BookContainer />
                    <BookContainer />
                    <BookContainer />
                    <BookContainer />
                    <BookContainer />
                </GridList>
            </div>
        );
    }
}

export default BooksContainer;