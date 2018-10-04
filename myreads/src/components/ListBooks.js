import React, { Component } from 'react';

import CustomizedTabs from './CustomizedTabs';
import BooksContainer from './BooksContainer';

import { AppContextConsumer } from '../App';

const shelves = ["currentlyReading", "wantToRead", "read"];

class ListBooks extends Component {

    state = {
        category: 0, // 0: currently reading, 1: want to read, 2: read, 3: others
    }

    handleChange(event, category) {
        this.setState({
            category: category
        })
    }

    filterBooks(category, allBooks) {

        return (category === 3)? 
            allBooks.filter(book => book.shelf === undefined) : 
            allBooks.filter(book => book.shelf === shelves[category]);
    }
    
    render() {

        const { category } = this.state;

        return (
            <AppContextConsumer>
                {({ allBooks }) => (
                    <div>  

                        <CustomizedTabs handleChange={this.handleChange.bind(this)} category={category}/>
                        
                        <BooksContainer books={this.filterBooks(category, allBooks)} />
                    </div>
                )}
            </AppContextConsumer>
       );
    }
}

export default ListBooks;